import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NovaTarefaInfo } from '../tarefa/tarefa.model';

@Component({
  selector: 'app-nova-tarefa',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nova-tarefa.component.html',
  styleUrl: './nova-tarefa.component.css',
})
export class NovaTarefaComponent {
  @Output() cancelar = new EventEmitter<void>();
  @Output() adicionar = new EventEmitter<NovaTarefaInfo>
  tituloInserido = '';
  resumeInserido = '';
  dataInserida = '';

  aoCancelar() {
    this.cancelar.emit();
  }

  aoEnviar() {
    this.adicionar.emit({
      titulo: this.tituloInserido,
      resume: this.resumeInserido,
      data: this.dataInserida,
    });
  }
}
