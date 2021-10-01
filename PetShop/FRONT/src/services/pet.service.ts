import { Injectable } from '@angular/core';
import { Pet } from 'src/models/pet';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PetService {

  private baseURL= "https://localhost:5000/petshop/pet";

  constructor(private http: HttpClient ){}

   list(): Observable <Pet[]>{
    return this.http.get<Pet[]>( `${this.baseURL}/list`)

   }
   create(pet: Pet): Observable <Pet> {

    return this.http.post<Pet>(`${this.baseURL}/create`, pet);

  }

  delete(pet: Pet): Observable <Pet>{

    return this.http.post<Pet>(`${this.baseURL}/delete`, pet)
  }

  update(pet: Pet): Observable <Pet>{

    return this.http.post<Pet>(`${this.baseURL}/update`, pet)
  }

}
