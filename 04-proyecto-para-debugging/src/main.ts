import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { LOCALE_ID } from '@angular/core';

registerLocaleData(localeEs, 'es');

bootstrapApplication(AppComponent, {
    providers: [
        { provide: LOCALE_ID, useValue: 'es'},
    ],
}).catch((err) => console.error(err));
