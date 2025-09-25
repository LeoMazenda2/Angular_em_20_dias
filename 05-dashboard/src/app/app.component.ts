import { Component } from '@angular/core';
import { CabecalhoComponent } from "./cabecalho/cabecalho.component";
import { TrafegoComponent } from "./dashboard/trafego/trafego.component";
import { RegistoSuporteComponent } from "./dashboard/registo-suporte/registo-suporte.component";
import { EstadoServidorComponent } from "./dashboard/estado-servidor/estado-servidor.component";
import { DashboardElementoComponent } from "./dashboard/dashboard-elemento/dashboard-elemento.component";

@Component({
  selector: 'app-raiz',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CabecalhoComponent, TrafegoComponent, RegistoSuporteComponent, EstadoServidorComponent, DashboardElementoComponent],
})
export class AppComponent { }
