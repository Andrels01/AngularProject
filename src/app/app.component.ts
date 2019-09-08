import { Component } from '@angular/core';
import { Usuario } from './model/usuario';
import {Produto} from './model/produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lojaAngular';
  usuarios: Array<Usuario>
  produtos: Array<Produto>

  //usuarios: Array<Usuario> = [
    //{uid:"1", nome: "Ana", email:"ana@email.com", pws:"11111"},
    //{uid:"2", nome: "Pedro", email:"pedro@email.com", pws:"22222"}
 // ]
}
