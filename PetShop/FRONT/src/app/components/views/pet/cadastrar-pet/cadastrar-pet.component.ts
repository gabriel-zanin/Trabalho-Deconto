import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from 'src/models/pet';
import { PetService } from 'src/services/pet.service';

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

  constructor(private router: Router, private service: PetService) { }

  ngOnInit(): void {}

    cadastrar(): void {

      let pet : Pet = {
        nome: this.nome,
        dono: this.dono,
        tipoAnimal: this.tipoAnimal,
      }
      this.service.create(pet).subscribe((pet) => {
        console.log(pet);
        this.router.navigate(["listar/pet"]);

      });

    }


}
