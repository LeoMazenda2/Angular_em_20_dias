import { Component, inject, Input } from '@angular/core';
import { type Tarefa } from './tarefa.model';
import { TarefasService } from '../tarefas.service';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css',
})
export class TarefaComponent {
  @Input({ required: true }) tarefa!: Tarefa;
  private taregasService = inject(TarefasService);
  // constructor(public taregasService: TarefasService) {
  // }

  aoCompletarTarefas() {
    this.taregasService.eliminarTarefa(this.tarefa.id);
  }
}
