import { Injectable } from '@angular/core';
import { Servico } from 'src/models/servico';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ServicoService {

  private baseURL= "https://localhost:5000/petshop/servico";

  constructor(private http: HttpClient ){}

  list(): Observable <Servico[]>{
    return this.http.get<Servico[]>( `${this.baseURL}/list`)

   }

   create(servico: Servico): Observable <Servico> {

    return this.http.post<Servico>(`${this.baseURL}/create`, servico);
   }
}
