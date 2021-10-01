import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servico } from 'src/models/servico';
import { ServicoService } from 'src/services/servico';

@Component({
  selector: 'app-editar-servico',
  templateUrl: './editar-servico.component.html',
  styleUrls: ['./editar-servico.component.css']
})
export class EditarServicoComponent implements OnInit {

  nome!: string;
  preco!: number;
  descricao!:string;
  criadoEm!: Date;
  servicoId!:number;

  constructor(private router: Router, private service: ServicoService) { }

  ngOnInit(): void {}

    editar(): void {

      let servico : Servico = {
        servicoId: this.servicoId,
        nome: this.nome,
        preco: this.preco,
        descricao: this.descricao,
        criadoEm: this.criadoEm
      }
      this.service.create(servico).subscribe((servico) => {
        console.log(servico);
        this.router.navigate(["editar/servico"]);

      });

    }

}
