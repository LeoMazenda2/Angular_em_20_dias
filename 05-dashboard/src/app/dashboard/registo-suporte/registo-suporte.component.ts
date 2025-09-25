import { Component } from '@angular/core';
import { NovoRegistoComponent } from "../registos/novo-registo/novo-registo.component";

@Component({
  selector: 'app-registo-suporte',
  standalone: true,
  imports: [NovoRegistoComponent],
  templateUrl: './registo-suporte.component.html',
  styleUrl: './registo-suporte.component.css'
})
export class RegistoSuporteComponent {

}
