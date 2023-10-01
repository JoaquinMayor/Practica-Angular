import { Component, Input } from '@angular/core';
import { Persona } from '../../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  
  @Input() persona:Persona = new Persona("",""); /*Para pasarle los elementos del padre al hijo */
  @Input() i:number = 0;

}
