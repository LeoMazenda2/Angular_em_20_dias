import { Component } from '@angular/core';
import { USUARIOS_FALSOS } from './usuario/usuarios-falsos';

@Component({
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  usuarios = USUARIOS_FALSOS;
  idUsuarioSelecionado?: string;

  get usuariosSelecionado(){
    return this.usuarios.find((usuario) => usuario.id === this.idUsuarioSelecionado)!;
  }

  aoSelecionarUsuario(id: string){
    this.idUsuarioSelecionado = id;
  }
}
