import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { CabecalhoComponent } from './app/cabecalho/cabecalho.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
