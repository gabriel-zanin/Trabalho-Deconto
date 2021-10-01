import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OS } from 'src/models/os';

@Injectable({
  providedIn: 'root'
})
export class OSService {

    private baseURL= "https://localhost:5000/petshop/pet";

    constructor(private http: HttpClient ){}

     list(): Observable <OS[]>{
      return this.http.get<OS[]>( `${this.baseURL}/list`)

     }
     create(OS: OS): Observable <OS> {

      return this.http.post<OS>(`${this.baseURL}/create`, OS);

    }

    delete(OS: OS): Observable <OS>{

      return this.http.post<OS>(`${this.baseURL}/delete`, OS)
    }

    update(OS: OS): Observable <OS>{

      return this.http.post<OS>(`${this.baseURL}/update`, OS)
    }

  }

