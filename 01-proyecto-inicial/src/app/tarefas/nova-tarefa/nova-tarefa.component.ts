import { Component, EventEmitter, Output } from '@angular/core';
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
  tituloInserido = '';
  resumeInserido = '';
  dataInserida = '';
  
  aoCancelar() {
    this.cancelar.emit();
  }
}
