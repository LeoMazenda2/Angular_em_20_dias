import { Component } from '@angular/core';

@Component({
  selector: 'app-trafego',
  standalone: true,
  imports: [],
  templateUrl: './trafego.component.html',
  styleUrl: './trafego.component.css',
})
export class TrafegoComponent {
  informacionTraficoFalsa = [
    {
      id: 'd1',
      valor: 433,
    },
    {
      id: 'd2',
      valor: 260,
    },
    {
      id: 'd3',
      valor: 290,
    },
    {
      id: 'd4',
      valor: 410,
    },
    {
      id: 'd5',
      valor: 397,
    },
    {
      id: 'd6',
      valor: 488,
    },
    {
      id: 'd47',
      valor: 589,
    },
  ];
  traficoMaximo = Math.max(
    ...this.informacionTraficoFalsa.map((data) => data.valor)
  );
}
