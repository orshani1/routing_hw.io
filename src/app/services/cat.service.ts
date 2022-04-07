import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http:HttpClient) {
    
   }
   getCatDetails(){
     return this.http.get("https://cat-fact.herokuapp.com/facts");
   }
}
