import { Component, Input } from '@angular/core';
import { TarefasService } from './tarefas.service';

@Component({
  selector: 'app-terefas',
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
