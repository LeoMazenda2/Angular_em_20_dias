import { Injectable } from '@angular/core';

import { type NuevaTareaInfo } from './tarea/tarea.model';

@Injectable({ providedIn: 'root' })
export class TareasService {
  private tareas = [
    {
          id: 't1',
          idUsuario: 'u1',
          titulo: 'Dominar Angular',
          resumen: 'Aprender todas las características básicas y avanzadas de Angular y saber c+omo apñicarlas',
          expira: '2025-01-01',
        },
        {
          id: 't2',
          idUsuario: 'u3',
          titulo: 'Crear el primer prototipo',
          resumen: 'Crear el primer prototipo del sitio web de la tienda',
          expira: '2025-11-05',
        },
        {
          id: 't3',
          idUsuario: 'u3',
          titulo: 'Preparar la plantilla del carrito',
          resumen: 'Preparar y describir una plantilla de carrito de compras de la tienda online',
          expira: '2025-05-16',
        },
  ];

  constructor() {
    const tareas = localStorage.getItem('tareas');

    if (tareas) {
      this.tareas = JSON.parse(tareas);
    }
  }

  obtenerTareasDeUsuario(idUsuario: string) {
    return this.tareas.filter((tarea) => tarea.idUsuario === idUsuario);
  }

  agregarTarea(infoDeTarea: NuevaTareaInfo, idUsuario: string) {
    this.tareas.unshift({
      id: new Date().getTime().toString(),
      idUsuario: idUsuario,
      titulo: infoDeTarea.titulo,
      resumen: infoDeTarea.resumen,
      expira: infoDeTarea.fecha,
    });
    this.guardarTareas();
  }

  eliminarTarea(id: string) {
    this.tareas = this.tareas.filter((tarea) => tarea.id !== id);
    this.guardarTareas();
  }

  private guardarTareas() {
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }
}
