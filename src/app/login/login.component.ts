import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UserStorageService} from '../services/user-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hidePassWord = true;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.OnInitForm();
  }

  OnInitForm() {
    this.loginForm = this.formBuilder?.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  visibiliteMotDePasse() {
    this.hidePassWord = !this.hidePassWord;
  }

  OnConnexion() {
    const username = this.loginForm?.get('email')?.value;
    const password = this.loginForm?.get('password')?.value;
    this.authService.login(username, password).subscribe(response => {
      if (UserStorageService.isAdminLoggIn()) {
        this.router.navigateByUrl('/admin/dashboard');

      } else if (UserStorageService.isCustomerLoggIn()) {
        this.router.navigateByUrl('/customer/dashboard');
      }
       this.snackBar.open('connexion réussie!', 'Ok', {duration: 5000, panelClass: 'succes'});

    }, (error) => {
      console.log('error' + error);
      this.snackBar.open('Echec de connexion.Identifiants incorrects!', 'close', {duration: 5000, panelClass: 'erreur-snackbar'});

    });
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
}
