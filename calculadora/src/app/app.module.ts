import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ResultadoComponent } from './resultado/resultado.component';
import { CalculoComponent } from './calculo/calculo.component';


@NgModule({
  declarations: [
    AppComponent,
    ResultadoComponent,
    CalculoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
