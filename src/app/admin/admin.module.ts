import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DemoMaterialModule} from '../demoMaterial';
import { EnregistrerCategorieComponent } from './components/enregistrer-categorie/enregistrer-categorie.component';
import { AjouterProduitComponent } from './components/ajouter-produit/ajouter-produit.component';


@NgModule({
  declarations: [AdminComponent, DashboardComponent, EnregistrerCategorieComponent, AjouterProduitComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule
  ]
})
export class AdminModule { }
