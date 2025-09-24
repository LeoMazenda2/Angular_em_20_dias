import { CurrencyPipe } from '@angular/common';
import { Component, inject} from '@angular/core';
import { InversionService } from '../inversion.service';

@Component({
  selector: 'app-resultado-inversion',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './resultado-inversion.component.html',
  styleUrl: './resultado-inversion.component.css',
})
export class ResultadoInversionComponent {
  private  inversionService = inject(InversionService)

  get resultado () {
    return this.inversionService.infoResultado;
  }
}
