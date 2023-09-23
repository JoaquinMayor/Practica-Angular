import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent {
  num1:number = 0;
  num2:number = 0;
  @Output() resultadoSuma = new EventEmitter<number>();
  
  sumar():void{
    let resultado = this.num1 + this.num2;
    this.resultadoSuma.emit(resultado); 
  }
}

