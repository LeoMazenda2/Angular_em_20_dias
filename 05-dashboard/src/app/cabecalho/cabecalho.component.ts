import { Component } from '@angular/core';
import { BotaoComponent } from "../compartilhado/botao/botao.component";

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [BotaoComponent],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {

}
