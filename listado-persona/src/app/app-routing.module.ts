import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardian } from './login/login-guardian.service';

const routes: Routes = [{path: "", component:PersonasComponent, canActivate:[LoginGuardian]},//cuando no escribamos ninguna ruta en el localhost se desppliega personasComponenet
{path:"personas", component:PersonasComponent, canActivate:[LoginGuardian]}, //cuando se escriba persona despues del /, el canActivate llama al servicio guardian para que no pueda ingresar a esa pagina en caso de no estar logueado
{path:"personas/agregar", component:FormularioComponent, canActivate:[LoginGuardian]},
{path:"personas/:id", component:FormularioComponent, canActivate:[LoginGuardian]}, //editar una persona con un parametro
{path:"login", component:LoginComponent},
{path:"**",component:ErrorComponent} //En caso de que no encuentre ninguna otra ruta, siempre se pone al final
]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
