import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inseir-usuaio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inseir-usuaio.component.html',
  styleUrl: './inseir-usuaio.component.css'
})
export class InseirUsuaioComponent {


  aoEnviar(){
    console.log('Envio envidado')
  }
}
