import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TarefasService } from '../tarefas.service';

@Component({
  selector: 'app-nova-tarefa',
  templateUrl: './nova-tarefa.component.html',
  styleUrl: './nova-tarefa.component.css',
})
export class NovaTarefaComponent {
  @Input({ required: true }) idUsuario!: string;
  @Output() fechar = new EventEmitter<void>();
  tituloInserido = '';
  resumeInserido = '';
  dataInserida = '';
  private tarefasService = inject(TarefasService); // injectar serviço

  aoCancelar() {
    this.fechar.emit();
  }

  aoEnviar() {
    this.tarefasService.adiconarTArefa(
      {
        titulo: this.tituloInserido,
        resume: this.resumeInserido,
        data: this.dataInserida,
      }, this.idUsuario)
      this.fechar.emit();
  }
}
