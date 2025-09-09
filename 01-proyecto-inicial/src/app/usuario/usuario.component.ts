import { Component, EventEmitter, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  @Input({required: true}) usuario!: {
    id: string,
    nome: string,
    avatar: string
  };

  @Output() selecionado = new EventEmitter();
  get rotaImagem() {
    return 'assets/usuarios/' +this.usuario.avatar;
  }

  aoSelecionarUsuario(){
    this.selecionado.emit(this.usuario.id);
   }
}

