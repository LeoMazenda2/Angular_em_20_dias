import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { CartaoComponent } from './compartilhado/cartao/cartao.component';
import { TarefaComponent } from './tarefas/tarefa/tarefa.component';
import { NovaTarefaComponent } from './tarefas/nova-tarefa/nova-tarefa.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    UsuarioComponent,
    CartaoComponent,
    TarefasComponent,
    TarefaComponent,
    NovaTarefaComponent
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
