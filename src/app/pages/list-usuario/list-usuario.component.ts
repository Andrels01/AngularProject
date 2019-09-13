import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../model/usuario';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AddUsuarioComponent } from '../add-usuario/add-usuario.component';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {

  protected usuarios:any;

  constructor(
    public usuarioService: UsuarioService,
    protected router: Router
  ) { }

  ngOnInit() {
    this.usuarios = this.usuarioService.getAll();
    
  }

  editar(usuario:any){
    this.ngOnInit();
    this.router.navigate(['addUsuario', usuario.key]);

  }

  apagar(usuario:any){
    console.log(usuario);
    this.usuarioService.delete(usuario.key);    
  }

}
