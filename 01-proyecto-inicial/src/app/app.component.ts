import { Component } from '@angular/core';
import { CabecalhoComponent } from "./cabecalho/cabecalho.component";
import { UsuarioComponent } from "./usuario/usuario.component";
import { USUARIOS_FALSOS } from './usuario/usuarios-falsos';
import { TerefasComponent } from "./terefas/terefas.component";
@Component({
  selector: 'app-raiz',
  standalone: true,
  imports: [CabecalhoComponent, UsuarioComponent, TerefasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  usuarios = USUARIOS_FALSOS;
  idUsuarioSelecionado = 'u1';

  get usuariosSelecionado(){
    return this.usuarios.find((usuario) => usuario.id === this.idUsuarioSelecionado)!;
  }
  aoSelecionarUsuario(id: string){
    this.idUsuarioSelecionado = id;
  }
}
