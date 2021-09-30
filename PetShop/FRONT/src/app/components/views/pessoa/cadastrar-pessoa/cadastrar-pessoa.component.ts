import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from 'src/models/pessoa';
import { PessoaService } from 'src/services/pessoa';

@Component({
  selector: 'app-cadastrar-pessoa',
  templateUrl: './cadastrar-pessoa.component.html',
  styleUrls: ['./cadastrar-pessoa.component.css']
})
export class CadastrarPessoaComponent implements OnInit {

  nome!: string;
  cpf!: number;
  funcao!: string;
  telefone!: number;

  constructor(private router: Router, private service: PessoaService) { }

  ngOnInit(): void {}

  cadastrar(): void {

    let pessoa : Pessoa = {

      nome: this.nome,
      cpf: this.cpf,
      funcao: this.funcao,
      telefone: this.telefone
    }
    this.service.create(pessoa).subscribe((pessoa)=>{
      console.log(pessoa);
      this.router.navigate(["listar/pessoa]"]);

    })
  }

}
