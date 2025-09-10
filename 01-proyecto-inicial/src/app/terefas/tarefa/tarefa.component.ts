import { Component, Input } from '@angular/core';

interface Tarefa {
  id: string,
  idUsuario: string,
  titulo: string,
  resume: string,
  expira: string,
}

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
