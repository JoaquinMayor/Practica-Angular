import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule) //Esta linea indica que hace un levantamiento de un codigo AppModule es el modulo por default
  .catch(err => console.error(err));
