import { CurrencyPipe } from '@angular/common';
import { Component, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-resultado-inversion',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './resultado-inversion.component.html',
  styleUrl: './resultado-inversion.component.css',
})
export class ResultadoInversionComponent {
  resultados = input<
    {
      anio: number;
      interes: number;
      valorFinalAnio: number;
      inversionAnual: number;
      interesTotal: number;
      montoTotalInvertido: number;
    }[]> ();
}
