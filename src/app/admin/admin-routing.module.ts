import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {EnregistrerCategorieComponent} from './components/enregistrer-categorie/enregistrer-categorie.component';
import {AjouterProduitComponent} from './components/ajouter-produit/ajouter-produit.component';

const routes: Routes = [
  {path: '', component: AdminComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'enregistrerCategorie', component: EnregistrerCategorieComponent},
  {path: 'produit', component: AjouterProduitComponent}
  // { path: '', component: AdminComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
