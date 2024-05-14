import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  APIURL = "http://localhost:3000/data";
  constructor(private httpClient:HttpClient) { }

  showdata(){
   console.log(this.APIURL);
   return this.httpClient.get(this.APIURL);
  }
}
