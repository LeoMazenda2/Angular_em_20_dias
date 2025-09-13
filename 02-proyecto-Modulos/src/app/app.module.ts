import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { CabecalhoComponent } from './cabecalho/cabecalho.component'
import { UsuarioComponent } from './usuario/usuario.component'
import { TarefaComponent } from './tarefas/tarefa/tarefa.component'
import { TarefasComponent } from './tarefas/tarefas.component'

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, CabecalhoComponent, UsuarioComponent, TarefasComponent]
})
export class AppModule { }
