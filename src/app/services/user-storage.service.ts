import {Injectable} from '@angular/core';

const TOKEN = 'ecom-token';
const USER = 'ecom-user';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() {
  }

  public enregistrerToken(token: string) {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }


  public enregistrerUser(user) {
    window.localStorage.removeItem(USER);
    // window.localStorage.setItem(TOKEN, JSON.stringify(user));
    window.localStorage.setItem(USER, JSON.stringify(user));

  }

  static getToken(): string {
    return localStorage.getItem(TOKEN);
  }

  static getUser(): any {
    return JSON.parse(localStorage.getItem(USER));
  }

  static getUserRole(): string {
    const user = this.getUser();
    if (user == null) {
      return '';
    } else {
      return user.role;
    }
    // return JSON.parse(localStorage.getItem(USER));
  }


  static isAdminLoggIn(): boolean {
    if (this.getToken() === null) {
      return false;
    } else {
      const role: string = this.getUserRole();
      return role === 'ADMIN';
    }

  }

  static isCustomerLoggIn(): boolean {
    if (this.getToken() === null) {
      return false;
    } else {
      const role: string = this.getUserRole();
      return role === 'CUSTOMER';
    }

  }

  static deconnexion() {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
  }

}
