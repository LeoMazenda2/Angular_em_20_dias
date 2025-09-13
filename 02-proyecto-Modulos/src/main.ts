import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
import { registerLocaleData } from '@angular/common';
import localeAo from '@angular/common/locales/pt-AO'
registerLocaleData(localeAo, 'pt-AO');


platformBrowserDynamic().bootstrapModule(AppModule)


// import { bootstrapApplication } from '@angular/platform-browser';



// bootstrapApplication(AppComponent, {

// }).catch((err) => console.error(err));
