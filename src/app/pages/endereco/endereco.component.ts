import { Component, OnInit, Input } from '@angular/core';
import { Endereco } from '../../model/endereco';
import { EnderecoService } from '../../services/endereco.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  @Input() public endereco: Endereco =  new Endereco;

  constructor(
    protected enderecoService:EnderecoService
  ) { }

  ngOnInit() {
  }

  buscaCep(event){
    let cep: string = event.target.value;
    if(cep.length == 8){
    this.enderecoService.getEndereco(cep)
    .subscribe(
      res=> {
      if (res.erro) {
        this.endereco = res;
      }else{
        this.endereco = res;
      }
        console.log(res);
      },
      err=>{
        this.endereco = null;
        console.log(err);
      }
    )
    
  }
}

}
