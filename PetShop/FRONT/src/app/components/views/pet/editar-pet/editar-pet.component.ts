import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from 'src/models/pet';
import { PetService } from 'src/services/pet.service';

@Component({
  selector: 'app-editar-pet',
  templateUrl: './editar-pet.component.html',
  styleUrls: ['./editar-pet.component.css']
})
export class EditarPetComponent implements OnInit {

  nome!: string;
  petId!: number;
  dono!: string;
  tipoAnimal!: string;

  constructor(private router: Router, private service: PetService) { }

  ngOnInit(): void {}

    editar(): void {

      let pet : Pet = {
        petId: this.petId,
        nome: this.nome,
        dono: this.dono,
        tipoAnimal: this.tipoAnimal,
      }
      this.service.create(pet).subscribe((pet) => {
        console.log(pet);
        this.router.navigate(["editar/pet"]);

      });

    }

}
