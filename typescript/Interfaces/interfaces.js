"use strict";
let usuario1 = { nombreUsuario: "Juan", password: "123", confirmarPassword: "123" }; //Determian y respeta lo que tiene esta interface
console.log(usuario1);
console.log(usuario1.nombreUsuario);
let avion = {
    abordarTransporte: function () {
        console.log("abordando");
    }
};
avion.abordarTransporte();
