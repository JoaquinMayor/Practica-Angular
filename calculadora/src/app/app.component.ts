import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  resultado:number = 0;

  procesarResultado(resultado:number){
    this.resultado = resultado;
  }
}
