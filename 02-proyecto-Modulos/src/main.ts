import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule)


// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { registerLocaleData } from '@angular/common';
// import localeAo from '@angular/common/locales/pt-AO'
// import { LOCALE_ID } from '@angular/core';

// registerLocaleData(localeAo, 'pt-AO');


// bootstrapApplication(AppComponent, {
//   providers: [
//     {provide: LOCALE_ID, useValue: 'pt-AO'},
//   ],
// }).catch((err) => console.error(err));
