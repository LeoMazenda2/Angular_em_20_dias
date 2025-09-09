import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) nome!: string;
  @Output() selecionado = new EventEmitter();

  get rotaImagem() {
    return 'assets/usuarios/' +this.avatar;
  }

  aoSelecionarUsuario(){
    this.selecionado.emit(this.id);
   }
}

