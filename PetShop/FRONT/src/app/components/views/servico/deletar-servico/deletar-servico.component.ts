import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servico } from 'src/models/servico';
import { ServicoService } from 'src/services/servico';

@Component({
  selector: 'app-deletar-servico',
  templateUrl: './deletar-servico.component.html',
  styleUrls: ['./deletar-servico.component.css']
})
export class DeletarServicoComponent implements OnInit {

  servicoId!:number;

  constructor(private router: Router, private service: ServicoService) { }

  ngOnInit(): void {}

    deletar(): void {

      let servico : Servico = {
        servicoId: this.servicoId,
        nome: '',
        preco: 0,
        descricao: ''
      }

     this.service.delete(servico).subscribe((servico) =>{
       console.log("Serviço deletado");
     })

    }

}
