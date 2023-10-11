import { Injectable } from "@angular/core";
import { DataServices } from "./data.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
    personas:Persona[] = []; 

    constructor(private dataService:DataServices){}
    
    setPersonas(personas:Persona[]){
        this.personas = personas;
    }

    obtenerPersonas(){
        return this.dataService.cargarPersonas();
    }

    personaAgregada(persona:Persona){
        if(this.personas == null){ //por si no hay registros en la base de datos
            this.personas = [];
        }
        this.personas.push(persona);
        this.dataService.guardarPersonas(this.personas); //llama funcion del dataservice para tener los datos de la base de datos
    }
    encontrarPersona(index:number){
        let persona:Persona = this.personas[index];
        return persona;
    }

    modificarPersona(index:number, persona:Persona){
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
        this.dataService.modificarPersona(index, persona); //modificar en la base de datos
    }

    eliminarPersona(index:number){
        this.personas.splice(index,1);
        this.dataService.eliminarPersona(index); //Elimina registro en la base de datos
        //Se vuelve a guardar el arreglo para regerar los indices en la base de datos
        this.modificarPersonas();
    }

    modificarPersonas(){
        if(this.personas != null){
            this.dataService.guardarPersonas(this.personas);
        }
    }
}