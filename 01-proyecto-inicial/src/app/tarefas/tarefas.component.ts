import { Component, Input } from '@angular/core';
import { TarefaComponent } from './tarefa/tarefa.component';
import { NovaTarefaComponent } from './nova-tarefa/nova-tarefa.component';
import { type NovaTarefaInfo } from './tarefa/tarefa.model';
import { TarefasService } from './tarefas.service';

@Component({
  selector: 'app-terefas',
  standalone: true,
  imports: [TarefaComponent, NovaTarefaComponent],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css',
})
export class TarefasComponent {
  @Input({ required: true }) nome?: string;
  @Input({ required: true }) idUsuario!: string;
  estaAdicionandoTarefaNova = false;

  constructor(public taregasService: TarefasService) {

  }

  get tarefasUsuarioSelecionado() {
    return this.taregasService.obterTarefasDeUsuario(this.idUsuario);
  }

  aoCompletarTarefa(id: string) {
    this.taregasService.eliminarTarefa(id);
  }

  aoIniciarNovaTarefa() {
    this.estaAdicionandoTarefaNova = true;
  }

  aoCancelarNovaTarefa() {
    this.estaAdicionandoTarefaNova = false;
  }

  aoAdicionarTarefa(infoTarefa: NovaTarefaInfo) {
    this.taregasService.adiconarTArefa(infoTarefa, this.idUsuario);
    this.estaAdicionandoTarefaNova = false;
  }
}
