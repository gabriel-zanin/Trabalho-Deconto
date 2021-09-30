import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from 'src/models/pet';

@Component({
  selector: 'app-cadastrar-pet',
  templateUrl: './cadastrar-pet.component.html',
  styleUrls: ['./cadastrar-pet.component.css']
})
export class CadastrarPetComponent implements OnInit {

  nome!: string;
  petId!: number;
  dono!: string;
  tipoAnimal!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {}

    cadastrar(): void {

      let pet : Pet = {

        nome: this.nome,
        dono: this.dono,
        tipoAnimal: this.tipoAnimal,

      }

      console.log(pet);
      this.router.navigate(["listar/pet"]);
    }


}
