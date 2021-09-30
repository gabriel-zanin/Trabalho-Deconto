import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/models/pet';
import { PetService } from 'src/services/pet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  pets!: Pet[];

  constructor(private service: PetService){}

  ngOnInit(): void {
    this.service.list().subscribe((pets) => {
      this.pets = pets;

      for(let Pet of pets){
        console.log();
      }

    });

  }

}
