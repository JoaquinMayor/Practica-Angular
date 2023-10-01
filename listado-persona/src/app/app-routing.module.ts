import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [{path: "", component:PersonasComponent},//cuando no escribamos ninguna ruta en el localhost se desppliega personasComponenet
{path:"personas", component:PersonasComponent}, //cuando se escriba persona despues del /}
{path:"personas/agregar", component:FormularioComponent},
{path:"personas/:id", component:FormularioComponent}, //editar una persona con un parametro

{path:"**",component:ErrorComponent} //En caso de que no encuentre ninguna otra ruta, siempre se pone al final
]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
