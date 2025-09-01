import { Component } from '@angular/core';
import { CabecalhoComponent } from "./cabecalho/cabecalho.component";
import { UsuarioComponent } from "./usuario/usuario.component";

@Component({
  selector: 'app-raiz',
  standalone: true,
  imports: [CabecalhoComponent, UsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
