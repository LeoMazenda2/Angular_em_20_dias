import { Component, Input } from '@angular/core';
import { TarefaComponent } from "./tarefa/tarefa.component";

@Component({
  selector: 'app-terefas',
  standalone: true,
  imports: [TarefaComponent],
  templateUrl: './terefas.component.html',
  styleUrl: './terefas.component.css'
})
export class TerefasComponent {
  @Input({required: true}) nome?: string;
}
