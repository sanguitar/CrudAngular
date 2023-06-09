import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clientes } from '../models/clientes.model'; // Importe a interface Clientes corretamente


@Injectable({
  providedIn: 'root'
})
export class ClientessService {

  private apiUrl = 'https://localhost:7067/api/clientes'; // Coloque a URL da sua API aqui

  constructor(private http: HttpClient) { }

  getAllClientes(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(this.apiUrl);
  }

  // Outros métodos para interagir com a API
}


