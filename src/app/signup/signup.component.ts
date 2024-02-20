import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  hidePassWord = true;

  // private  snackBar: MatSnackBar
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signUpForm = this.formBuilder.group({
      nom: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      confirmpassword: [null, Validators.required],
    });
  }

  visibiliteMotDePasse() {
    this.hidePassWord = !this.hidePassWord;
  }

  OnEnregistrer() {
    const password = this.signUpForm.get('password')?.value;
    const confirmpassword = this.signUpForm.get('confirmpassword')?.value;
    if (password !== confirmpassword) {
      this.snackBar.open('Les mots de passe ne correspondent pas!', 'fermer', {duration: 5000, panelClass: 'erreur-snackbar'});
      return;
    }
    this.authService.senregistrer(this.signUpForm?.value).subscribe(data => {
      console.log(this.signUpForm?.value);
      this.snackBar.open('compte crée avec succès!', 'close', {duration: 5000, panelClass: 'succes'});
      this.router.navigateByUrl('/authentification');
    }, (error) => {
      console.log(this.signUpForm?.value);
      console.log('error' + error);
      this.snackBar.open('Echec de création de compte.Veuillez réessayer!', 'close', {duration: 5000, panelClass: 'erreur-snackbar'});

    });
  }
}
