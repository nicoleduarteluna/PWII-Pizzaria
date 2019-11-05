import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'; 

@Component({
  selector: 'has-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  constructor (public formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
