import { Injectable } from '@angular/core';
import { Pessoa } from 'src/models/pessoa';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PessoaService {

  private baseURL= "https://localhost:5000/petshop/pessoa";

  constructor(private http: HttpClient ){}

  list(): Observable <Pessoa[]>{
    return this.http.get<Pessoa[]>( `${this.baseURL}/list`)

   }

   create(pessoa: Pessoa): Observable <Pessoa> {

    return this.http.post<Pessoa>(`${this.baseURL}/create`, pessoa);

  }
  delete(pessoa: Pessoa): Observable <Pessoa>{

    return this.http.post<Pessoa>(`${this.baseURL}/delete`, pessoa)
  }
}
