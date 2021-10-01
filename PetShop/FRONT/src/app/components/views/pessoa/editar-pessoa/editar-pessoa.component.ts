import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from 'src/models/pessoa';
import { PessoaService } from 'src/services/pessoa';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {


  nome!: string;
  cpf!: string;
  funcao!: string;
  telefone!: number;

  constructor(private router: Router, private service: PessoaService) { }

  ngOnInit(): void {}

    editar(): void {

      let pessoa : Pessoa = {
        nome: this.nome,
        cpf: this.cpf,
        funcao: this.funcao,
        telefone: this.telefone
      }
      this.service.create(pessoa).subscribe((pessoa) => {
        console.log(pessoa);
        this.router.navigate(["editar/pessoa"]);

      });

    }
}
