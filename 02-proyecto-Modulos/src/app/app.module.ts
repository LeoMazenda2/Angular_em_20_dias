import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CompartilhadoModule } from './compartilhado/compartilhado.module';
import { TarefasModule } from './tarefas/tarefas.module';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    UsuarioComponent
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, CompartilhadoModule, TarefasModule],
    providers: [
    {provide: LOCALE_ID, useValue: 'pt-AO'},
  ],
})
export class AppModule {}
