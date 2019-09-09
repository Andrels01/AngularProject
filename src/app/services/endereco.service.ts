import { Injectable } from '@angular/core';

import { Endereco } from '../model/endereco';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EnderecoService {
protected endereco: Endereco = new Endereco;
  constructor(
    protected http:HttpClient
  ) { }

  getEndereco(cep){
    return this.http.get<Endereco>("https://viacep.com.br/ws/"+ cep +"/json/")
  }
}
