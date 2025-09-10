import { Component, Input } from '@angular/core';
import { type Tarefa } from './tarefa.model';


@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css',
})
export class TarefaComponent {
  @Input({required: true}) terefa!: Tarefa;
}
