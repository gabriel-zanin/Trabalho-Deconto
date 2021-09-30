import { Component, OnInit } from '@angular/core';
import { Servico } from 'src/models/servico';
import { ServicoService } from 'src/services/servico';

@Component({
  selector: 'app-listar-servico',
  templateUrl: './listar-servico.component.html',
  styleUrls: ['./listar-servico.component.css']
})
export class ListarServicoComponent implements OnInit {

  servicos: Servico[] = [];

  constructor(private service: ServicoService){}

  ngOnInit(): void {

    this.service.list().subscribe((servicos) => {

      this.servicos = servicos;
      for (let servico of servicos){
        console.log(servico)
      }
    })

  }
}
