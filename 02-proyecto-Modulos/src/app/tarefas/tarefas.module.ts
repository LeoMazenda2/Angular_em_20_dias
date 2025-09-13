import { NgModule } from '@angular/core';
import { TarefasComponent } from './tarefas.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { NovaTarefaComponent } from './nova-tarefa/nova-tarefa.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TarefaComponent,
    TarefasComponent,
    NovaTarefaComponent],
  exports: [TarefasComponent],
  imports: [CommonModule, FormsModule, CompartilhadoModule]
})
export class TarefasModule { }
