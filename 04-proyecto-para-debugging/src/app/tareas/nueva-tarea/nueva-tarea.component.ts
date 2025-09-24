import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type NuevaTareaInfo } from '../tarea/tarea.model';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-nueva-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nueva-tarea.component.html',
  styleUrl: './nueva-tarea.component.css',
})
export class NuevaTareaComponent {
  @Input({ required: true }) idUsuario!: string;
  @Output() cerrar = new EventEmitter<void>();
  tituloIngresado = '';
  resumenIngresado = '';
  fechaIngresada = '';
  private tareasService = inject(TareasService);

  alCancelar() {
    this.cerrar.emit();
  }

  alEnviar() {
    this.tareasService.agregarTarea(
      {
        titulo: this.tituloIngresado,
        resumen: this.resumenIngresado,
        fecha: this.fechaIngresada,
      },
      this.idUsuario
    );
    this.cerrar.emit();
  }
}
