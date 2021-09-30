import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servico } from 'src/models/servico';
import { ServicoService } from 'src/services/servico';

@Component({
  selector: 'app-cadastrar-servico',
  templateUrl: './cadastrar-servico.component.html',
  styleUrls: ['./cadastrar-servico.component.css']
})
export class CadastrarServicoComponent implements OnInit {

  nome!: string;
  preco!: number;
  descricao!:string;
  criadoEm!: Date;

  constructor(private router: Router, private service: ServicoService) { }

  ngOnInit(): void {}

  cadastrar(): void {

    let servico : Servico = {

      nome: this.nome,
      preco: this.preco,
      descricao: this.descricao,
      criadoEm: this.criadoEm
    }

    this.service.create(servico).subscribe((servico)=>{
      console.log(servico);
      this.router.navigate(["listar/pessoa]"]);

    })
  }

}
