import { Component, signal } from '@angular/core';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { InseirUsuaioComponent } from './inseir-usuaio/inseir-usuaio.component';
import { type IngressoInsersion } from './ingresso-insersion.model';
import { ResultadoInversionComponent } from "./resultado-inversion/resultado-inversion.component";

@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CabecalhoComponent, InseirUsuaioComponent, ResultadoInversionComponent],
})
export class AppComponent {
  infoResultados = signal <{
    anio: number;
    interes: number;
    valorFinalAnio: number;
    inversionAnual: number;
    interesTotal: number;
    montoTotalInvertido: number;
  }[] | undefined>(undefined);


  aoCalcularResultadosInversion(info: IngressoInsersion) {
    const {inversionInicial, inversionAnual, rendimientoEsperado, duracion } = info;
    const datosAnuales = [];
    let valorInversion = inversionInicial;

    for (let i = 0; i < duracion; i++) {
      const anio = i + 1;
      const interesGanadoEnAnio = valorInversion * (rendimientoEsperado / 100);
      valorInversion += interesGanadoEnAnio + inversionAnual;
      const interesTotal =
        valorInversion - inversionAnual * anio - inversionInicial;
      datosAnuales.push({
        anio: anio,
        interes: interesGanadoEnAnio,
        valorFinalAnio: valorInversion,
        inversionAnual: inversionAnual,
        interesTotal: interesTotal,
        montoTotalInvertido: inversionInicial + inversionAnual * anio,
      });
    }

    this.infoResultados.set(datosAnuales);
  }
}
