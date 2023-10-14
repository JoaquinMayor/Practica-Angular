import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

@Injectable()
export class LoginService{

    token:string | null = null;

    constructor(private router:Router){}

    login(email:string, password:string){
        firebase.auth().signInWithEmailAndPassword(email, password).
        then(  //devuelve un token para ejecutar las url del servidor
            response=>{
                firebase.auth().currentUser?.getIdToken().
                then(
                    token => {
                        this.token = token; 
                        this.router.navigate(["/"]);
                    }
                )
            }
        )  //metodo de autorizacion

       
    }

    getIdToken(){
        return this.token;
    }

    isAutenticado(){
        return this.token != null;

    }

    logOut(){
        firebase.auth().signOut().then(()=>{
          this.token = null;
          this.router.navigate(["login"]);
        }).catch(error=>console.log("error logOut" +error));
      }
}