import { Component, OnInit } from '@angular/core';
import {Persona} from "./persona.model";
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PersonasService]
})
export class AppComponent{ //implementacion para inicializar clases
  title = 'Listado de Personas';
  
   
}
