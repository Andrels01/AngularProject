import { Component, OnInit } from '@angular/core';
import{ Produto } from '../../model/produto';
import { ProdutoService } from '../../services/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.css']
})
export class AddProdutoComponent implements OnInit {
  //classe produto criada na seção de classes "model/...""
  produto: Produto = new Produto;

  constructor(
    public produtoService: ProdutoService,
    protected router: Router
  ) { }

  ngOnInit() {
  }

  onsubmit(form){
    
    this.produtoService.save(this.produto).subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err);
      }
    );
    this.produto = new Produto();
    console.log(this.produto, this.produtoService.produtos);
    form.reset();
    //this.router.navigate(["/"]);
  }

}
