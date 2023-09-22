"use strict";
let saludo = "Hola a todos";
//En typescrip no se puede cambiar el tipo de dato como en javascript por ejemplo saludar ya no puede ser un numero
// si no se le asigna un valor al momento hay que aclarar el tipo
let numero;
let cualquiera; //Almacena cualquier tipo de dato
cualquiera = "cadena";
cualquiera = 10;
const PI_NUMERO = 3.14; //Las constantes van con letras mayusculas
numero = 10;
function saludar() {
    console.log(saludo);
    console.log(numero);
    console.log(cualquiera);
    console.log(PI_NUMERO);
}
saludar();
