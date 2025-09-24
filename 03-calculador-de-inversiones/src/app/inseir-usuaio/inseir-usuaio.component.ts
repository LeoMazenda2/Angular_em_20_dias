import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InversionService } from '../inversion.service';

@Component({
  selector: 'app-inseir-usuaio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inseir-usuaio.component.html',
  styleUrl: './inseir-usuaio.component.css',
})
export class InseirUsuaioComponent {
  iversaoInivilInserida = signal('0');
  iversaoAnualInserida = signal('0');
  rendimenroEsperadoInserida = signal('5');
  duracaoInserida = signal('10');

  constructor(private inversionService: InversionService) {}

  aoEnviar() {
    this.inversionService.calcularResultadosInversion({
      inversionInicial: +this.iversaoInivilInserida(),
      duracion: +this.duracaoInserida(),
      rendimientoEsperado: +this.rendimenroEsperadoInserida(),
      inversionAnual: +this.iversaoAnualInserida(),
    });

    this.iversaoInivilInserida.set('0');
    this.iversaoAnualInserida.set('0');
    this.rendimenroEsperadoInserida.set('5');
    this.duracaoInserida.set('10');
  }
}
