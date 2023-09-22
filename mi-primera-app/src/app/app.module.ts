import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, PersonasComponent, PersonaComponent //Se registran los modulos que uno creamos en esta lista
  ],
  imports: [
    BrowserModule,
    FormsModule //Para trabajar con formularios y el two way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
