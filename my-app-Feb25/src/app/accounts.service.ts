import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { Account } from '../../models/account.model'; // Adjust the import path as necessary

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  //private apiUrl = 'https://6128991386a213001729f9df.mockapi.io/test/v1/principals'; // Replace with your API URL
    constructor(private _httpClient: HttpClient) {}
  
    getAccounts(): Observable<any> {
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");
    }
  }
   

