import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ResultadoInversionComponent } from './resultado-inversion/resultado-inversion.component';
import { InserirUsuarioModule } from './inseir-usuaio/inserir-usuario.module';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ResultadoInversionComponent,
  ],
  imports: [BrowserModule, InserirUsuarioModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
