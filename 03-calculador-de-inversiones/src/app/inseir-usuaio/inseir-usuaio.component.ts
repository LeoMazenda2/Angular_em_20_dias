import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inseir-usuaio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inseir-usuaio.component.html',
  styleUrl: './inseir-usuaio.component.css',
})
export class InseirUsuaioComponent {
  @Output() calcular = new EventEmitter<{
    inversionInicial: number,
    duracion: number,
    inversionAnual: number,
    rendimientoEsperado: number,
  }>()

  iversaoInivilInserida = '0';
  iversaoAnualInserida = '0';
  rendimenroEsperadoInserida = '5';
  duracaoInserida = '10';

  aoEnviar() {
    this.calcular.emit({
    inversionInicial: +this.iversaoInivilInserida,
    duracion: +this.duracaoInserida,
    rendimientoEsperado: +this.rendimenroEsperadoInserida,
    inversionAnual: +this.iversaoAnualInserida,
  });
  }
}
