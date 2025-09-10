import { Component, EventEmitter, Input, output, Output } from '@angular/core';

interface Usuario{
   id: string,
    nome: string,
    avatar: string
}

// type Usuario = {
//     id: string,
//     nome: string,
//     avatar: string
//   };


@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  @Input({required: true}) usuario!: Usuario ;

  @Output() selecionado = new EventEmitter();
  get rotaImagem() {
    return 'assets/usuarios/' +this.usuario.avatar;
  }

  aoSelecionarUsuario(){
    this.selecionado.emit(this.usuario.id);
   }
}

