import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClienteDTO } from '../../../models/cliente.dto';
import { FieldMessage } from '../../../models/field_message';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  riscos: String[];

  messages: FieldMessage[] = [];

  formGroup: FormGroup;

  cliente: ClienteDTO;

  msgErro: boolean = false;

  msgSucc: boolean = false;

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
      this.formGroup.reset();
      this.msgSucc = true;
      setTimeout(function () {
        this.msgSucc = false;
      }.bind(this), 3500);
    }, error => {
      this.messages = JSON.parse(error.error).errors;
      this.msgErro = true;
      setTimeout(function () {
        this.msgErro = false;
      }.bind(this), 2000);
    });
  }

}