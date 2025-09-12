import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nova-tarefa',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nova-tarefa.component.html',
  styleUrl: './nova-tarefa.component.css',
})
export class NovaTarefaComponent {
  @Output() cancelar = new EventEmitter<void>();
  tituloInserido = signal ('');
  resumeInserido = signal ('');
  dataInserida = signal ('');

  aoCancelar() {
    this.cancelar.emit();
  }
}
