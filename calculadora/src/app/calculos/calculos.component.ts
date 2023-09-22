import { Component } from '@angular/core';

@Component({
  selector: 'app-calculos',
  templateUrl: './calculos.component.html',
  styleUrls: ['./calculos.component.css']
})
export class CalculosComponent {

  num1:number = 0;
  num2:number = 0;
  resultado:number = 0;

  sumar():void{
    this.resultado = this.num1 + this.num2;
  }

}
