import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {UserStorageService} from '../user-storage.service';

const BASIC_URL = 'http://localhost:8086';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
              private userStorageService: UserStorageService) {
  }
  /**
   *
   * @param signInRequest
   * ici je n'utilise pas forcémént l'objet signInRequest je le définit comme de type any ;
   */
  senregistrer(signInRequest: any): Observable<any> {
    return this.httpClient.post(BASIC_URL + '/signup', signInRequest);
  }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = {username, password};

    return this.httpClient.post(BASIC_URL + '/authentification', body, {headers, observe: 'response'}).pipe(
      map((response) => {

        const token = response.headers.get('Authorization').substring(7);
        console.log('token' + token);
        const user = response.body;
        console.log('user' + user);
        if (token && user) {
          console.log('User et token sont corrects' + token + '   ' + user);
          this.userStorageService.enregistrerToken(token);
          console.log('enregistrerToken' + token);
          this.userStorageService.enregistrerUser(user);
          console.log('enregistrerUser' + user);
          return true;
        }
        return false;
      })
    )
      ;
  }

}
