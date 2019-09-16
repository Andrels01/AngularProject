import { Component, OnInit } from '@angular/core';
import { Produto } from '../../model/produto';
import { ProdutoService } from '../../services/produto.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-produto',
  templateUrl: './perfil-produto.component.html',
  styleUrls: ['./perfil-produto.component.css']
})
export class PerfilProdutoComponent implements OnInit {
  private id: string = null;
  protected produto: Produto = new Produto;

  constructor(
    public produtoService: ProdutoService,
    protected router: Router,
    protected activedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activedRouter.snapshot.paramMap.get("id");
    if (this.id) {
      this.produtoService.getProduto(this.id).subscribe(
        res => {
          this.produto = res
        }
      );
    }

  }

}
