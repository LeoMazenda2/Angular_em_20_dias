import { Component, Input } from '@angular/core';

import { TareaComponent } from './tarea/tarea.component';
import { NuevaTareaComponent } from './nueva-tarea/nueva-tarea.component';
import { TareasService } from './tareas.service';

@Component({
  selector: 'app-tareas',
  standalone: true,
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css',
  imports: [TareaComponent, NuevaTareaComponent],
})
export class TareasComponent {
  @Input({ required: true }) idUsuario!: string;
  @Input({ required: true }) nombre!: string;
  estaAgregandoTareaNueva = false;

  constructor(private tareasService: TareasService) {}

  get tareasUsuarioSeleccionado() {
    return this.tareasService.obtenerTareasDeUsuario(this.idUsuario);
  }

  alIniciarNuevaTarea() {
    this.estaAgregandoTareaNueva = true;
  }

  alCerrarTareaNueva() {
    this.estaAgregandoTareaNueva = false;
  }
}
