import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'; 

@Component({
  selector: 'has-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  formComanda: FormGroup;

  constructor (public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formComanda = this.formBuilder.group ({
    chopp: this.formBuilder.control(''),
    pizza: this.formBuilder.control(''),
    recheio: this.formBuilder.control(''),
    pessoa: this.formBuilder.control(''),
    taxaservico: this.formBuilder.control(true)
    })
  }

}
