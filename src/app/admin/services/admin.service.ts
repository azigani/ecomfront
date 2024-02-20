import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserStorageService} from '../../services/user-storage.service';

const BASIC_URL = 'http://localhost:8086/';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) {
  }

  ajouterCategorie(categorieDto: any): Observable<any> {
    console.log(categorieDto);
    return this.httpClient.post(BASIC_URL + 'api/admin/enregistrerCategorie', categorieDto, {
      headers: this.creerHeaderAutorisation(),
    });
    console.log(categorieDto);
    console.log('headers' + Headers);
  }


  ajouterProduit(produitDto: any): Observable<any> {
    console.log(produitDto);
    return this.httpClient.post(BASIC_URL + 'api/admin/ajouterProduit', produitDto, {
      headers: this.creerHeaderAutorisation(),
    });
  }


  listeCategorie(): Observable<any> {
    return this.httpClient.get(BASIC_URL + 'api/admin/listeProduits', {
      headers: this.creerHeaderAutorisation(),
    });
  }

  private creerHeaderAutorisation(): HttpHeaders {
    console.log('UserStorageService.getToken()' + UserStorageService.getToken());
    return new HttpHeaders().set('Authorization', 'Bearer ' + UserStorageService.getToken());
    console.log('UserStorageService.getToken()' + UserStorageService.getToken());

  }

}
