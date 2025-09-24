import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { InseirUsuaioComponent } from './inseir-usuaio/inseir-usuaio.component';
import { ResultadoInversionComponent } from './resultado-inversion/resultado-inversion.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    InseirUsuaioComponent,
    ResultadoInversionComponent,
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
