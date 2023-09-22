//Los decoradores de pueden aplicar a clases, atributos o metodos

function Saludar(target: Function):void{
    target.prototype.saludos = function():void{
        console.log("Hola desde Decoradores");
    }  //Define la funcion saludos
    //prototype modifica el objeto en tiempo de ejecución
}

@Saludar
class Hola{
    constructor(){
    }
}
let hola1 = new Hola();
hola1.saludos();