import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { InversionService } from '../inversion.service';

@Component({
  selector: 'app-resultado-inversion',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './resultado-inversion.component.html',
  styleUrl: './resultado-inversion.component.css',
})
export class ResultadoInversionComponent {
  private inversionService = inject(InversionService);

  resultado = computed(() => this.inversionService.infoResultado());
  // resultado = this.inversionService.infoResultado.asReadonly(); <== essa linha tambem funciona mas a de cima é a recomendada 
}
