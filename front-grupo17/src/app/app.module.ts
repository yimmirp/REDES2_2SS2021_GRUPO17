import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { EnviarReporteComponent } from './enviar-reporte/enviar-reporte.component';
import { ListarReportesComponent } from './listar-reportes/listar-reportes.component';
import { VerReporteComponent } from './ver-reporte/ver-reporte.component';
import { MainComponent } from './main/main.component';
import { ModalModule } from 'ngb-modal';
@NgModule({
  declarations: [
    AppComponent,
    EnviarReporteComponent,
    ListarReportesComponent,
    VerReporteComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
