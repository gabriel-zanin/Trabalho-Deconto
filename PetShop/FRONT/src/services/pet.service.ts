import { Injectable } from '@angular/core';
import { Pet } from 'src/models/pet';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private baseURL = "https://localhost:5001/petshop/pet";

  constructor(private http: HttpClient ){}
   list(): Observable< Pet[]>{

    return this.http.get<Pet[]>(`${this.baseURL}/list`);
   }
}
