import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  private http: HttpClient;

  constructor(
    handler: HttpBackend
  ) { 
    this.http = new HttpClient(handler);
  }

  public consultaCep(){
    //cep https://viacep.com.br/ws/85807594/json/
    let url = 'https://viacep.com.br/ws/'; 

    return this.http.get(url + 85807594 + '/json').toPromise();


  }
}
