import { Component } from '@angular/core';

@Component({
  selector: 'app-estado-servidor',
  standalone: true,
  imports: [],
  templateUrl: './estado-servidor.component.html',
  styleUrl: './estado-servidor.component.css'
})
export class EstadoServidorComponent {
  estadoActual = 'online';
}
