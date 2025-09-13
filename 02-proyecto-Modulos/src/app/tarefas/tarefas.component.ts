import { Component, Input } from '@angular/core';
import { TarefaComponent } from './tarefa/tarefa.component';
import { NovaTarefaComponent } from './nova-tarefa/nova-tarefa.component';
import { TarefasService } from './tarefas.service';

@Component({
  selector: 'app-terefas',
  standalone: true,
  imports: [TarefaComponent, NovaTarefaComponent],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css',
})
export class TarefasComponent {
[x: string]: any;
  @Input({ required: true }) nome?: string;
  @Input({ required: true }) idUsuario!: string;
  estaAdicionandoTarefaNova = false;

  //injectar serviço no construtor
  constructor(public taregasService: TarefasService) {

  }

  get tarefasUsuarioSelecionado() {
    return this.taregasService.obterTarefasDeUsuario(this.idUsuario);
  }

  aoIniciarNovaTarefa() {
    this.estaAdicionandoTarefaNova = true;
  }

  aoFecharNovaTarefa() {
    this.estaAdicionandoTarefaNova = false;
  }
}
