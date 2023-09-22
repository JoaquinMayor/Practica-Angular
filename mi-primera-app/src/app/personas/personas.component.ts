import { Component } from "@angular/core";

@Component({
    selector: "app-personas",
    templateUrl: "./personas.component.html",
    styleUrls:["./personas.component.css"]
})
export class PersonasComponent{ //Se debe registrar en el archivo de app.modules.ts en declarations
    desabilitar = false;
    mensaje = "No se ha agregado ninguna persona";
    titulo = "Cadena vacia"
    mostrar = false;
    
    agregarPersona(){
        this.mensaje ="Persona agregada";
        this.mostrar = true;
    }

    modificarTitulo(event:Event){
        this.titulo = (<HTMLInputElement>event.target).value;  //target es el elemento que se ejecuta en ese momento y es necesario entre <> poner el tipo de elemento que es 
    }
}