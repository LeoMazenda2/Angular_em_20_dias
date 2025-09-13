import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Usuario } from './usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  @Input({required: true}) usuario!: Usuario ;
  @Input({required: true}) ativo!: boolean ;
  @Output() selecionado = new EventEmitter();
  get rotaImagem() {
    return 'assets/usuarios/' +this.usuario.avatar;
  }

  aoSelecionarUsuario(){
    this.selecionado.emit(this.usuario.id);
   }
}

