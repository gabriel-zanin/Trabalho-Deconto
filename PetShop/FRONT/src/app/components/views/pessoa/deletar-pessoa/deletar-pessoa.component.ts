import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from 'src/models/pessoa';
import { PessoaService } from 'src/services/pessoa';

@Component({
  selector: 'app-deletar-pessoa',
  templateUrl: './deletar-pessoa.component.html',
  styleUrls: ['./deletar-pessoa.component.css']
})
export class DeletarPessoaComponent implements OnInit {

  cpf!:string;

  constructor(private router: Router, private service: PessoaService) { }

  ngOnInit(): void {}

    deletar(): void {

      let pessoa : Pessoa = {
        cpf: this.cpf,
        nome: '',
        funcao: '',
        telefone: 0
      }

     this.service.delete(pessoa).subscribe((pessoa) =>{
       console.log("pessoa deletada");
     })
    }
}
