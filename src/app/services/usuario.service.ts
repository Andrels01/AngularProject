import { Injectable } from '@angular/core';
//chamando a classe que chama os comando http
import { HttpClient } from '@angular/common/http'

import { Usuario } from '../model/usuario';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios: Array<Usuario> = [
   
  ]

  protected db = environment.serverAPI;

  constructor(
    //criandoa variavel = primeiro o nome da variavel : nome da classe
    protected http:HttpClient
   ) { }

  save(usuario:Usuario){
    return this.http.post(this.db + "usuarios", usuario);
  }
  getAll(){
    return this.http.get(this.db + "usuarios");
  }
}
