import {Component} from '@angular/core';
import {UserStorageService} from './services/user-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isCustomerLoggedIn: boolean = UserStorageService.isCustomerLoggIn();
  isAdminLoggIn: boolean = UserStorageService.isAdminLoggIn();
  title = 'ecomfront';

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.router.events.subscribe(events => {
      this.isCustomerLoggedIn = UserStorageService.isCustomerLoggIn();
      this.isAdminLoggIn = UserStorageService.isAdminLoggIn();
    });
  }

  onDeconnexion() {
    UserStorageService.deconnexion();
    this.router.navigateByUrl('/authentification');
  }
}
