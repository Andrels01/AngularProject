
import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.css']
})

export class AddProdutoComponent implements OnInit {
protected produto: Produto = new Produto
protected id: String = null;

  constructor(
    public produtoService: ProdutoService,
    protected router: Router,
    protected activatesRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatesRouter.snapshot.paramMap.get("id");
    if(this.id) {
      this.produtoService.getProduto(this.id).subscribe(
        res => {
          this.produto = res;
        }
      )
    }
  }

  onsubmit(form) {
    console.log(form);
    try {
      if(this.id){
      this.produtoService.updateProduto(this.produto, this.id).then(
        res => {
          //console.log(res);
          this.produto = new Produto;          
          form.reset();
          this.router.navigate(["/"]);
          Swal.fire("Produto Atualizado!")
        },
        err => {
          console.log(err);
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Erro ao Atualizar o produto!\nVerifique os dados!',
          })
        }
      )
    }else{
      this.produtoService.save(this.produto).then(
        res => {
          console.log(res);
          form.reset();
          this.router.navigate(["/"]);
          Swal.fire("Produto cadastrado")
    },
    err => {
      console.log(err);
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Erro ao cadastrar o produto!\nVerifique os dados!',
      })
    }
  )
}
    }catch (e) {
      Swal.fire({
        type: 'warning',
        title: 'Oops...',
        text: 'Algo deu errado ao acessar a base de dados.',
        footer: '<a href="/">Ligue para nosso suporte ?</a>'
      })
    }
  }

}
