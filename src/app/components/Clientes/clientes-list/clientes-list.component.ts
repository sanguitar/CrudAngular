import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/models/clientes.model';
import { ClientessService } from 'src/app/services/clientess.service';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  clientes: Clientes[] = [];

  constructor(private ClientessService: ClientessService) { }

  ngOnInit(): void {

    this.ClientessService.getAllClientes()
      .subscribe({
        next: (clientes) => {
          this.clientes = clientes;

        },
        error: (response) => {
          console.log(response);
        }
      });
  }

}


