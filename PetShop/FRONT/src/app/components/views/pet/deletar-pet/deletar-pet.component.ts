import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from 'src/models/pet';
import { PetService } from 'src/services/pet.service';

@Component({
  selector: 'app-deletar-pet',
  templateUrl: './deletar-pet.component.html',
  styleUrls: ['./deletar-pet.component.css']
})
export class DeletarPetComponent implements OnInit {

  idPet!:number;

  constructor(private router: Router, private service: PetService) { }

  ngOnInit(): void {}

    deletar(): void {

      let pet : Pet = {
        petId: this.idPet,
        nome: '',
        dono: '',
        tipoAnimal: ''
      }

     this.service.delete(pet).subscribe((pet) =>{
       console.log("pet deletado");
     })

    }



}


