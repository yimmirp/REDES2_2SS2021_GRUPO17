import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { MainComponent } from '../main/main.component'

@Component({
  selector: 'app-enviar-reporte',
  templateUrl: './enviar-reporte.component.html',
  styleUrls: ['./enviar-reporte.component.css']
})
export class EnviarReporteComponent implements OnInit {

  carne_estudiante : string;
  nombre_estudiante : string;
  curso_estudiante : string;
  reporte_estudiante : string;

  constructor(private mainComponent: MainComponent) { 
    this.mainComponent.sendReportActive();

    this.carne_estudiante = "";
    this.nombre_estudiante = "";
    this.curso_estudiante = "";
    this.reporte_estudiante = "";

  }

  ngOnInit(): void { }

}
