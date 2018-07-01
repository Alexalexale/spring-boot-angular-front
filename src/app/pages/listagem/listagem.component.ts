import { Component, OnInit } from '@angular/core';
import { ClienteDTO } from '../../../models/cliente.dto';
import { Subject } from 'rxjs';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  clientes: ClienteDTO[] = [];

  constructor(public clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.findAll().subscribe(response => {
      this.clientes = response;
    }, error => { });
  }

}
