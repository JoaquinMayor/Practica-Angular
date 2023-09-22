export class Persona{
    private nombre:string;

    constructor(nombre:string){
        this.nombre = nombre;
    }

    get getNombre():string{
        return this.nombre;
    }
}