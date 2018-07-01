import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClienteDTO } from '../../../models/cliente.dto';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  riscos: String[];

  formGroup: FormGroup;

  cliente: ClienteDTO;

  constructor(public clienteService: ClienteService, public fb: FormBuilder) {

    this.formGroup = this.fb.group({
      nome: '',
      limiteCredito: '',
      risco: ''
    });

  }

  ngOnInit() {
    this.clienteService.findAllRiscos().subscribe(response => {
      this.riscos = response as String[];
    }, error => {
    });
  }

  insert() {
    this.cliente = this.formGroup.value;
    this.clienteService.insert(this.cliente).subscribe(response => {

    }, error => {
      console.log(error.error);
    });
  }

}