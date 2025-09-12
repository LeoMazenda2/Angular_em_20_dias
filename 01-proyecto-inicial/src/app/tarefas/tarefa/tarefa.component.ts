import { Component, inject, Input } from '@angular/core';
import { type Tarefa } from './tarefa.model';
import { CartaoComponent } from '../../compartilhado/cartao/cartao.component';
import { DatePipe } from '@angular/common';
import { TarefasService } from '../tarefas.service';

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [CartaoComponent, DatePipe],
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
