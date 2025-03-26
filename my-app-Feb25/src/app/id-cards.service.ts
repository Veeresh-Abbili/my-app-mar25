import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdCardsService {

    constructor(private _httpClient:HttpClient) { }
    
    getid_card(id:any):Observable<any>{
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student/",id)
    }


    getid_cards():Observable<any>{
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student")
    }
    getfilteredid_cards(term:any):Observable<any>{
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term);
    }
    getSortedid_cards(column:any,order:any):Observable<any>{
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+column+"&&order="+order);
    }
    getpaginationid_cards(limit:any,page:any):Observable<any>{
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+limit+"&&order="+page);
    }
    
}
