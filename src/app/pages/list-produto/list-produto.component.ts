import { Component, OnInit } from '@angular/core';
import { Produto } from '../../model/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AddProdutoComponent } from '../add-produto/add-produto.component';

@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produto.component.html',
  styleUrls: ['./list-produto.component.css']
})
export class ListProdutoComponent implements OnInit {

  protected produtos:any;

  constructor(
    public produtoService: ProdutoService,
    protected router: Router
  ) { }

  ngOnInit() {
    this.produtos = this.produtoService.getAll();
  }

  editar(produto:any){
    this.ngOnInit();
    this.router.navigate(['addProduto', produto.key]);

  }

  apagar(produto:any){
    console.log(produto);
    this.produtoService.delete(produto.key);    
  }

  perfil(produto){
    this.router.navigate(['perfilProduto', produto.key]);
  }

}
