import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Tarefa } from './tarefa.model';
import { CartaoComponent } from "../../compartilhado/cartao/cartao.component";


@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [CartaoComponent],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css',
})
export class TarefaComponent {
  @Input({required: true}) tarefa!: Tarefa;
  @Output() terminada = new EventEmitter<string>();


  aoCompletarTarefas(){
    this.terminada.emit(this.tarefa.id)
  }
}
