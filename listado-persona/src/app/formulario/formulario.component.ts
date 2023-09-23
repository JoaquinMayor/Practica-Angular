import { Component, EventEmitter, Output } from '@angular/core';
import {Persona} from "../persona.model"

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>(); //Mensaje que comunica del elemento creado del elemento hijo al padre, se debe indicar entre <> que tipo de dato es
  nombreInput:string = "";
  apellidoInput:string = "";

  agregarPersona():void{
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    //this.personas.push(persona);
    this.personaCreada.emit(persona1); //propaga la informacion del elemento hijo al elemento padre
  }

  /*agregarPersona(nombreInput: HTMLInputElement, apellidoInput :HTMLInputElement):void{ funcion de la referencia local de los # del html
    let persona1 = new Persona(nombreInput.value, apellidoInput.value);
    //this.personas.push(persona);
    this.personaCreada.emit(persona1); //propaga la informacion del elemento hijo al elemento padre
  }*/
}
