import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from 'src/models/pet';
import { PetService } from 'src/services/pet.service';
import { Pessoa } from 'src/models/pessoa';
import { PessoaService } from 'src/services/pessoa';

@Component({
  selector: 'app-cadastrar-pet',
  templateUrl: './cadastrar-pet.component.html',
  styleUrls: ['./cadastrar-pet.component.css']
})
export class CadastrarPetComponent implements OnInit {

  nome!: string;
  petId!: number;
  cpfDono!: string;
  nomeDono!: string;
  tipoAnimal!: string;

  pessoas: Pessoa[] = [];

  constructor(private router: Router, private servicePet: PetService, private servicePessoa: PessoaService) {}

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


    cadastrar(): void {

      let pet : Pet = {
        nome: this.nome,
        dono: this.nomeDono,
        tipoAnimal: this.tipoAnimal,
      }
      this.servicePet.create(pet).subscribe((pet) => {
        console.log(pet);
        this.router.navigate(["listar/pet"]);

      });

    }


}
