import { Component } from '@angular/core';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { InseirUsuaioComponent } from './inseir-usuaio/inseir-usuaio.component';
import { ResultadoInversionComponent } from "./resultado-inversion/resultado-inversion.component";

@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CabecalhoComponent, InseirUsuaioComponent, ResultadoInversionComponent],
})
export class AppComponent {
}
