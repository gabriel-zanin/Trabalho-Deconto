import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/models/pet';
import { PetService } from 'src/services/pet.service';

@Component({
  selector: 'app-listar-pet',
  templateUrl: './listar-pet.component.html',
  styleUrls: ['./listar-pet.component.css']
})
export class ListarPetComponent implements OnInit {

  pets: Pet[] = [];

  constructor(private service: PetService){}

  ngOnInit(): void {

    this.service.list().subscribe((pets) => {

      this.pets = pets;
      for (let pet of pets){
        console.log(pet)
      }
    })

  }

}
