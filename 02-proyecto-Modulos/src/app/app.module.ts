import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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
})
export class AppModule {}
