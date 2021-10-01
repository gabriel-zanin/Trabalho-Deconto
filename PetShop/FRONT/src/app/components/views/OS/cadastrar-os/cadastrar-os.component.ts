import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from 'src/models/pessoa';
import { Pet } from 'src/models/pet';
import { Servico } from 'src/models/servico';
import { PessoaService } from 'src/services/pessoa';
import { PetService } from 'src/services/pet.service';
import { ServicoService } from 'src/services/servico';

@Component({
  selector: 'app-cadastrar-os',
  templateUrl: './cadastrar-os.component.html',
  styleUrls: ['./cadastrar-os.component.css']
})
export class CadastrarOSComponent implements OnInit {

  pessoas: Pessoa[] = [];

  pets: Pet[] = [];
  cpfDono!: string;
  nomeDono!: string;

  servicos: Servico[] = [];



  constructor(private router: Router,
             private servicePet: PetService,
             private servicePessoa: PessoaService,
             private serviceServico: ServicoService) {}

  ngOnInit(): void {}

  atribuirDono(): void{

    this.servicePessoa.list().subscribe((pessoas) => {

      this.pessoas = pessoas;
      for (let pessoa of pessoas){
        if (pessoa.cpf == this.cpfDono) {
          pessoa.nome = this.nomeDono
        }
      }
   }

}
