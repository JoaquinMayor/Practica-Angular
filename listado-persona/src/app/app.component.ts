import { Component, OnInit } from '@angular/core';
import {Persona} from "./persona.model";
import { PersonasService } from './personas.service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import { LoginService } from './login/login.service';
//para el manejo de la base de datos del login se debe instalar con npm install --save firebase

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PersonasService]
})
export class AppComponent implements OnInit{
 
  title = 'Listado de Personas';

  constructor(private loginService:LoginService){}
  ngOnInit(): void {
    firebase.initializeApp({ //con estos datos podemos hacer login de la aplicacion a firebase, los datos se obtienen de firebase
      apiKey: "AIzaSyAfAyp61B2igUCSQmGU54nR9Nu3zcbtXVM",
      authDomain: "personas-6d43c.firebaseapp.com"
    })
  } //implementacion para inicializar clases

  isAutenticado(){
    return this.loginService.isAutenticado();
  }

  salir(){
    this.loginService.logOut();
  }

  
   
}
