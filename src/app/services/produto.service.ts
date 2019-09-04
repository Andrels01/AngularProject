import { Injectable } from '@angular/core';
//chamando a classe que chama os comando http
import { HttpClient } from '@angular/common/http';

import { Produto } from '../model/produto';
//importando a classe servidor JSON
import {environment} from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})

export class ProdutoService {
  //Criando um vetor de produtos
  produtos: Array<Produto> = [

  ]
 
  //vai ate environment.ts para ver a classe que tem os atributos
  //do servidor JSON
  protected db = environment.serverAPI;

  
  constructor(
    //criandoa variavel = primeiro o nome da variavel : nome da classe
    protected http:HttpClient
  ) { }

  save(produto:Produto){
    return this.http.post(this.db + "produtos", produto); 
   }
   getAll(){
     return this.http.get(this.db + "produtos");
   }
    }

