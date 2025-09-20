import { Component } from '@angular/core';
import { CabecalhoComponent } from "./cabecalho/cabecalho.component";
import { InseirUsuaioComponent } from "./inseir-usuaio/inseir-usuaio.component";

@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CabecalhoComponent, InseirUsuaioComponent],
})
export class AppComponent {}
