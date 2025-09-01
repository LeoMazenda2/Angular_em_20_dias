import { Component } from '@angular/core';

import {USUARIOS_FALSOS} from '../usuario/usuarios-falsos';
const indiceAleatorio = Math.floor(Math.random() * USUARIOS_FALSOS.length);

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  public usuarioSelecionado = USUARIOS_FALSOS[indiceAleatorio];
}

