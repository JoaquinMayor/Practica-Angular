import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //nombre del componente donde lo pones entre <> en el index.html
  templateUrl: './app.component.html', //con que se relaciona en html
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi Primera App en Angular'; //una variable que se invoca en el html app con {{title}}
  saludo = "Saludos desde Angular"
}
