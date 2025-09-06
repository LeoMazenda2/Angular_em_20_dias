import { Component, computed, signal } from '@angular/core';

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
  public usuarioSelecionado = signal(USUARIOS_FALSOS[indiceAleatorio]);
  rotaImagem = computed(() => 'assets/usuarios/' + this.usuarioSelecionado().avatar)

  // get rotaImagem(){
  //   return 'assets/usuarios/' + this.usuarioSelecionado.avatar;
  // }

  aoSelecionarUsuario(){
    const indiceAleatorio = Math.floor(Math.random() * USUARIOS_FALSOS.length);
    this.usuarioSelecionado.set(USUARIOS_FALSOS[indiceAleatorio]);
  }
}

