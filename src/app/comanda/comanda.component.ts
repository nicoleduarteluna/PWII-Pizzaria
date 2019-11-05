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

  onProcessar () {
    let valorTaxa: number = 0; 
   
    let totalChopp: number = this.formComanda.value.chopp * 7.30;
    let totalPizza: number = this.formComanda.value.pizza * 31.50;
    let totalRecheio: number = this.formComanda.value.recheio * 5.90;
    let finalTotal: number = totalChopp + totalPizza + totalRecheio;

    let resulTaxa: boolean = this.formComanda.value.taxaservico;
    if(resulTaxa == true)
    {
      valorTaxa = finalTotal * 0.1;        
    }
    else
    {
      valorTaxa;
    } 

    let totalPessoa: number = finalTotal / this.formComanda.value.pessoa;
    let totalTaxa: number = finalTotal + valorTaxa;

    alert (`Valor total: ${finalTotal}, \n Total por pessoa: ${totalPessoa}, \n Valor da taxa: ${valorTaxa},  \n Total com taxa: ${totalTaxa}` )
  }

}
