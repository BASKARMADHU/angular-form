import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _httpclient : HttpClient) { }

  savedata(userdetails:any []){
      return this._httpclient.post("https://angular-454bc-default-rtdb.firebaseio.com/data.json",userdetails)
  }

  getdata(){
    return this._httpclient.get("https://angular-454bc-default-rtdb.firebaseio.com/data.json")

  }
  
}
  