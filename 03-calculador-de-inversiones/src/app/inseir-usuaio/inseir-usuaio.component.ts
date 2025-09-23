import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inseir-usuaio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inseir-usuaio.component.html',
  styleUrl: './inseir-usuaio.component.css',
})
export class InseirUsuaioComponent {
  iversaoInivilInserida = '0';
  iversaoAnualInserida = '0';
  rendimenroEsperadoInserida = '5';
  duracaoInserida = '10';

  aoEnviar() {
    console.log('Envio envidado');
    console.log(this.iversaoInivilInserida);
    console.log(this.iversaoAnualInserida);
    console.log(this.rendimenroEsperadoInserida);
    console.log(this.duracaoInserida);
  }
}
