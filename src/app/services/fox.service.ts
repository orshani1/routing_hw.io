import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoxService {

  constructor(private http:HttpClient) {
    
   }
   getFox(){
     return this.http.get("https://randomfox.ca/floof/?ref=apilist.fun");
   }
}
