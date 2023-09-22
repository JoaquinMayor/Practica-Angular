interface Usuario{
    nombreUsuario:string;
    password:string;
    confirmarPassword?:string;  //Singo de pregunta determina que ese atributo es opcional
}

let usuario1:Usuario = {nombreUsuario:"Juan", password:"123", confirmarPassword:"123"}; //Determian y respeta lo que tiene esta interface
console.log(usuario1);
console.log(usuario1.nombreUsuario);

interface Abordar{ // Interfaces con metodo
    abordarTransporte():void;
}

let avion:Abordar = { //Lo aplica a un elemento
    abordarTransporte: function(){
        console.log("abordando")
    }
}

avion.abordarTransporte();