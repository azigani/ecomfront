import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth/auth.service';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-enregistrer-categorie',
  templateUrl: './enregistrer-categorie.component.html',
  styleUrls: ['./enregistrer-categorie.component.css']
})
export class EnregistrerCategorieComponent implements OnInit {

  categorieForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private snackBar: MatSnackBar,
              private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.onInitForm();
  }

  onInitForm() {
    this.categorieForm = this.formBuilder?.group({
      nomcategorie: [null, [Validators.required]],
      description: [null],
    });
  }

  OnEnregistrer(): void {
    if (this.categorieForm?.valid) {
      console.log('je rentre car valide' + this.categorieForm?.valid);
     // const categorieDto = this.categorieForm.value;
      //console.log(categorieDto);
      this.adminService.ajouterCategorie(this.categorieForm.value).subscribe((response) => {
        console.log('je rentre car valide');
        console.log('formulaire' + response);
        if (response?.id != null) {
          //console.log('je rentre car valide et id existe' + response.id);
          this.snackBar.open('catégorie créee avec succès!', 'Ok', {duration: 5000, panelClass: 'succes'});
          this.router.navigateByUrl('/admin/dashboard');
        } else {
          this.snackBar.open(response.message, 'Ok', {duration: 5000, panelClass: 'error-snack'});
        }
      });
    } else {
      this.categorieForm.markAllAsTouched();
    }
  }


}
