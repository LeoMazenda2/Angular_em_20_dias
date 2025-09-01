import { Component } from '@angular/core';
import { CabecalhoComponent } from "./cabecalho.component";

@Component({
  selector: 'app-raiz',
  standalone: true,
  imports: [CabecalhoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
