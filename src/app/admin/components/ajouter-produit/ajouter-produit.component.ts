import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {
  produitForm!: FormGroup;
  fichierSelectionne: File | null;
  imagePreview: string | ArrayBuffer | null;
  listecategories: any = [];

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private snackBar: MatSnackBar,
              private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.onInitFormProduit();

  }


  onInitFormProduit() {
    this.produitForm = this.formBuilder?.group({
      categorieId: [null, [Validators.required]],
      nomProduit: [null, [Validators.required]],
      prixProduit: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });
    this.listeCategories();
  }

  OnEnregistrer(): void {
    if (this.produitForm?.valid) {
      console.log('je rentre car valide' + this.produitForm?.valid);
      this.adminService.ajouterProduit(this.produitForm.value).subscribe((response) => {
        if (response?.id != null) {
          this.snackBar.open('catégorie créee avec succès!', 'Ok', {duration: 5000, panelClass: 'succes'});
          this.router.navigateByUrl('/admin/dashboard');
        } else {
          this.snackBar.open(response.message, 'Ok', {duration: 5000, panelClass: 'error-snack'});
        }
      });
    } else {
      this.produitForm.markAllAsTouched();
    }
  }

  OnselectionnerFichier(event: any) {
    this.fichierSelectionne = event.target.files[0];
    this.previewImage();
  }

  private previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.fichierSelectionne);
  }

  private listeCategories() {
    this.adminService.listeCategorie().subscribe(data => {
      this.listecategories = data;
    });
  }
}
