import { Component } from '@angular/core';
import { BotaoComponent } from '../../../compartilhado/botao/botao.component';
import { ControlComponent } from "../../../compartilhado/control/control.component";

@Component({
  selector: 'app-novo-registo',
  standalone: true,
  imports: [BotaoComponent, ControlComponent],
  templateUrl: './novo-registo.component.html',
  styleUrl: './novo-registo.component.css'
})
export class NovoRegistoComponent {

}
