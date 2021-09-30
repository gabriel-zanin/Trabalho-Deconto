import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/models/pessoa';
import { PessoaService } from 'src/services/pessoa';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarPessoaComponent implements OnInit {

  pessoas: Pessoa[] = [];

  constructor(private service: PessoaService){}

  ngOnInit(): void {

    this.service.list().subscribe((pessoas) => {

      this.pessoas = pessoas;
      for (let pessoa of pessoas){
        console.log(pessoa)
      }
    })

  }

}
