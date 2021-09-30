import { Injectable } from '@angular/core';
import { Pet } from 'src/models/pet';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient ){}
   list(): Pet[]{
    return[]
   }
}
