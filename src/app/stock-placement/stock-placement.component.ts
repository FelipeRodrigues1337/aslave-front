import { Component, OnInit } from '@angular/core';

import { IStockInput } from './../../domain/IStockInput';
import { ProcurarNomePipe } from './../pipes/procurar-nome.pipe';
import { ProcuraTipoPipe } from '../pipes/procura-tipo.pipe';
import { PrcourarMinDatePipe } from '../pipes/prcourar-min-date.pipe';
import { PrcourarMaxDatePipe } from '../pipes/prcourar-max-date.pipe';

@Component({
  selector: 'app-stock-placement',
  templateUrl: './stock-placement.component.html',
  styleUrls: ['./stock-placement.component.css']
})
export class StockPlacementComponent implements OnInit {

  arrayInputs: Array<IStockInput>;

  stockInputs: IStockInput[] = [
    {name: "Cássio", date: "2018-09-01", value: 120.50, input_type:1},
    {name: "Vinicius", date: "2018-11-22", value: 60.50, input_type:2},
    {name: "Ramon", date: "2018-11-20", value: 6000.50, input_type:1},
    {name: "Adriana", date: "2018-11-19", value: 300.50, input_type:2},
    {name: "Carol", date: "2018-11-20", value: 320.50, input_type:1},
    {name: "Cássio", date: "2018-11-22", value: 120.50, input_type:1},
    {name: "Vinicius", date: "2018-11-22", value: 60.50, input_type:1},
    {name: "Ramon", date: "2018-11-20", value: 6000.50, input_type:1},
    {name: "Adriana", date: "2018-11-19", value: 300.50, input_type:2},
    {name: "Carol", date: "2018-11-22", value: 320.50, input_type:1}
  ];

  procuraNome: ProcurarNomePipe;
  procuraTipo: ProcuraTipoPipe;
  procuraMinDate: PrcourarMinDatePipe;
  procuraMaxDate: PrcourarMaxDatePipe;

  displayStock: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  onDisplayStock(){
    this.displayStock = !this.displayStock;
  }

  onSubmit(form){
    console.log(form.value.fornecedor);
    console.log(form.value.dateInit);
    console.log(form.value.dateEnd);
    console.log(form.value.type);
  }
}
