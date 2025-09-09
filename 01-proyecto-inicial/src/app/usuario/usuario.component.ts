import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  @Input({required: true}) avatar!: string;
  @Input({required: true}) nome!: string;

  get rotaImagem() {
    return 'assets/usuarios/' +this.avatar;
  }
  aoSelecionarUsuario(){ }
}

