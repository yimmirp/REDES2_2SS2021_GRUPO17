import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { EnviarReporteComponent } from './enviar-reporte/enviar-reporte.component';
import { ListarReportesComponent } from './listar-reportes/listar-reportes.component';
import { VerReporteComponent } from './ver-reporte/ver-reporte.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main/enviar-reporte', pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'enviar-reporte',
        component: EnviarReporteComponent
      },
      {
        path: 'listar-reportes',
        component: ListarReportesComponent
      },
      {
        path: 'ver-reporte',
        component: VerReporteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
