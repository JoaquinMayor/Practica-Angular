import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent  implements OnInit{

  personas:Persona[] = []; 

  constructor(private personaService:PersonasService, private router:Router){ //router para trabajar con las rutas

  }
  ngOnInit(): void {
    this.personas = this.personaService.personas; //Se lo esta inicializando con la lista de personas de personaService
  }
  
  personaAgregada(persona:Persona){
    //this.personas.push(persona);
    this.personaService.personaAgregada(persona);
  }

  agregar(){
      this.router.navigate(["personas/agregar"]); //redirige a una url
  }
}
