import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InseirUsuaioComponent } from './inseir-usuaio.component';



@NgModule({
  declarations: [InseirUsuaioComponent],
  imports: [ FormsModule],
  exports:[InseirUsuaioComponent]
})
export class InserirUsuarioModule { }
