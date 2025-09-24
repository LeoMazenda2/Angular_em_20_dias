import { Injectable, signal } from '@angular/core';
import { type IngressoInsersion } from './ingresso-insersion.model';

@Injectable({
  providedIn: 'root',
})
export class InversionService {
  infoResultado = signal<{
    anio: number;
    interes: number;
    valorFinalAnio: number;
    inversionAnual: number;
    interesTotal: number;
    montoTotalInvertido: number;
  }[] | undefined> (undefined);

  calcularResultadosInversion(info: IngressoInsersion) {
    const { inversionInicial, inversionAnual, rendimientoEsperado, duracion } =
      info;
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

    this.infoResultado.set(datosAnuales);
  }

  constructor() {}
}
