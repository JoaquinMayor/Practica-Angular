import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Persona} from "../../persona.model"
import { LogginfService } from '../../LoggingService.service';
import { PersonasService } from 'src/app/personas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers:[LogginfService, ], //se tiene que especificar aqui tambien el tipo de servicio a utilizar
})
export class FormularioComponent implements OnInit{
  @Output() personaCreada = new EventEmitter<Persona>(); //Mensaje que comunica del elemento creado del elemento hijo al padre, se debe indicar entre <> que tipo de dato es
  nombreInput:string = "";
  apellidoInput:string = "";
  index:number = 0;
  modoEdicion:number = 0;

  constructor(private loggingService:LogginfService, private personaService:PersonasService, private router:Router,
    private route:ActivatedRoute){ //para aplicar el servicio hay que crear una instancia en el contructor
    
  }
  ngOnInit(): void {
    this.index = this.route.snapshot.params["id"]; //Recupera el id del html de persona, que se definio en el routing module en el ultimo path
    //Lo reconoce porque en el routing.modjule se encuentra enlazado y toma id porque ese es el nombre que tomamos

    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion']; //El + del principio convierte de string a entero
    if(this.index /*this.modoEdicion != null && this.modoEdicion === 1 */){
      let persona:Persona = this.personaService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  onGuardarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    if(this.index){ //Si ya se encuentra se entra en modo edicion
      this.personaService.modificarPersona(this.index, persona1);
    }else{
      this.personaService.personaAgregada(persona1);
    }
   
    this.router.navigate([`personas`]);

  
  }

  agregarPersona():void{
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    //this.personas.push(persona);
    this.loggingService.enviaMenbsajeAConsokla("Enviamos persona Nombre:" + persona1.nombre + "apellido: " + persona1.apellido); //aplicamos el servicio creado
    this.personaCreada.emit(persona1); //propaga la informacion del elemento hijo al elemento padre
  }

  /*agregarPersona(nombreInput: HTMLInputElement, apellidoInput :HTMLInputElement):void{ funcion de la referencia local de los # del html
    let persona1 = new Persona(nombreInput.value, apellidoInput.value);
    //this.personas.push(persona);
    this.personaCreada.emit(persona1); //propaga la informacion del elemento hijo al elemento padre
  }*/

  eliminarPersona(){
    if(this.index !=null){
      this.personaService.eliminarPersona(this.index);
    }

    this.router.navigate(["personas"]);
  }
}
