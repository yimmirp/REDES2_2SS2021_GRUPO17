import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service'
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { MainComponent } from '../main/main.component'

@Component({
  selector: 'app-enviar-reporte',
  templateUrl: './enviar-reporte.component.html',
  styleUrls: ['./enviar-reporte.component.css']
})
export class EnviarReporteComponent implements OnInit {

  carne_estudiante: string;
  nombre_estudiante: string;
  curso_estudiante: string;
  reporte_estudiante: string;

  constructor(private mainComponent: MainComponent, private servicio: ServicioService) {
    this.mainComponent.sendReportActive();

    this.carne_estudiante = "";
    this.nombre_estudiante = "";
    this.curso_estudiante = "";
    this.reporte_estudiante = "";

  }

  ngOnInit(): void { }

  enviar_reporte() {
    if (this.carne_estudiante != "" && this.nombre_estudiante != "" && this.curso_estudiante != "" && this.reporte_estudiante != "") {
      this.servicio.insertar({
        'carnet': this.carne_estudiante,
        'nombre' : this.nombre_estudiante,
        'curso' : this.curso_estudiante,
        'descripcion' : this.reporte_estudiante
      }).subscribe(data => {

        if (data['Mensaje'] == 'Reporte Ingresado Correctamente') {
          alert('Reporte Enviado');
          this.carne_estudiante = '';
          this.nombre_estudiante = "";
          this.curso_estudiante = "";
          this.reporte_estudiante = "";
        }
        else
        {
          console.log(data);
        }

      }, error => {
        alert('Ocurrió un error. Por favor inténtelo de nuevo');
        console.log(error);
      });
    }
  }

}
