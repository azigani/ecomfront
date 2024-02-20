import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'authentification', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)},

  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
