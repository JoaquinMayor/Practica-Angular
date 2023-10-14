import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { LoginService } from './login/login.service';

@Injectable()
export class DataServices{ //Juntar datos de la base de datos firebase 
    constructor(private httpClient: HttpClient, private loginService:LoginService){ //la clase httpClient ayuda a vincular con la base de datos

    }

    cargarPersonas(){ //juntar los datos de la  base de datos
        const token = this.loginService.getIdToken(); //se necesita hacer el token pára autentificar el dato y se le adjunta como una query parameter a la url desde ?
        return this.httpClient.get('https://personas-6d43c-default-rtdb.firebaseio.com/datos.json?auth='+token);
    }

    //Guardar personas
    guardarPersonas(personas:Persona[]){
        const token = this.loginService.getIdToken();
        this.httpClient.put('https://personas-6d43c-default-rtdb.firebaseio.com/datos.json?auth='+token, personas)
        .subscribe(
            response =>{
                console.log("resultado guardar Personas" + response);
            },
            error => console.log("Error al guardar Personas: " + error)
        );
        //se le pasa para guardar el link mas el nombre de algo.json, sumado a lo que se quiere guardar
        // y es necesario suscribirse al metodo para que devuelva la info
    }

    modificarPersona(index:number, persona:Persona){
        const token = this.loginService.getIdToken();
        let url:string;
        url = 'https://personas-6d43c-default-rtdb.firebaseio.com/datos/'+index+'.json?auth='+token;
        this.httpClient.put(url, persona).subscribe(
            response=> {console.log("Resultado modificar Persona: "+response);},
            error =>{console.log("Error en modificar Persona: "+ error)}
        )
    }

    eliminarPersona(index:number){
        const token = this.loginService.getIdToken();
        let url:string;
        url = 'https://personas-6d43c-default-rtdb.firebaseio.com/datos/'+index+'.json?auth='+token;
        this.httpClient.delete(url).subscribe(
            response=> {console.log("Resultado eliminar Persona: "+response);},
            error =>{console.log("Error en eliminar Persona: "+ error)}
        )
    }
}