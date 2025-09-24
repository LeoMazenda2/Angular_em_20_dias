import { Component, Input, Output, EventEmitter } from '@angular/core';

import { type Usuario } from './usuario.model';
import { TarjetaComponent } from "../compartida/tarjeta/tarjeta.component";

@Component({
    selector: 'app-usuario',
    standalone: true,
    templateUrl: './usuario.component.html',
    styleUrl: './usuario.component.css',
    imports: [TarjetaComponent]
})
export class UsuarioComponent {
  @Input({ required: true }) usuario!: Usuario;
  @Input({required: true}) seleccionado!: boolean;
  @Output() seleccion = new EventEmitter<string>();

  get rutaImagen() {
    return 'assets/usuarios/' + this.usuario.avatar;
  }

  alSeleccionarUsuario() {
    this.seleccion.emit(this.usuario.id);
  }
}
