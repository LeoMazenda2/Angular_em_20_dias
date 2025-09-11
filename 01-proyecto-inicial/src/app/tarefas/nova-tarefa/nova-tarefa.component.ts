import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-tarefa',
  standalone: true,
  imports: [],
  templateUrl: './nova-tarefa.component.html',
  styleUrl: './nova-tarefa.component.css'
})
export class NovaTarefaComponent {
  @Output() cancelar = new EventEmitter<void>();

  aoCancelar(){
    this.cancelar.emit();
  }
}
