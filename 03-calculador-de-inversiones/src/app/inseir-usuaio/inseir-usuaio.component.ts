import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IngressoInsersion } from '../ingresso-insersion.model';

@Component({
  selector: 'app-inseir-usuaio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inseir-usuaio.component.html',
  styleUrl: './inseir-usuaio.component.css',
})
export class InseirUsuaioComponent {
  calcular = output<IngressoInsersion>()

  iversaoInivilInserida = signal('0');
  iversaoAnualInserida = signal ('0');
  rendimenroEsperadoInserida = signal ('5');
  duracaoInserida = signal ('10');

  aoEnviar() {
    this.calcular.emit({
    inversionInicial: +this.iversaoInivilInserida(),
    duracion: +this.duracaoInserida(),
    rendimientoEsperado: +this.rendimenroEsperadoInserida(),
    inversionAnual: +this.iversaoAnualInserida(),
  });
  this.iversaoInivilInserida.set('0')
  this.iversaoAnualInserida.set('0')
  this.rendimenroEsperadoInserida.set('5')
  this.duracaoInserida.set('10')

  }
}
