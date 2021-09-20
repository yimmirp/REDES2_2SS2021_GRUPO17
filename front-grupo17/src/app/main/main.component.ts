import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  titulo : string;
  enviarFlag : boolean;
  listarFlag : boolean;
  verFlag : boolean;

  constructor() {
    this.titulo = 'Este título se colocó desde el constructor';

    this.enviarFlag = false;
    this.listarFlag = false;
    this.verFlag = false;
  }

  ngOnInit(): void {
  }

  sendReportActive():void
  {
    this.titulo = "Enviar Reporte".toUpperCase();
    this.enviarFlag = true;
    this.listarFlag = false;
    this.verFlag = false;
  }

  listReportsActive():void
  {
    this.titulo = "Listar Reportes Almacenados".toUpperCase();
    this.enviarFlag = false;
    this.listarFlag = true;
    this.verFlag = false;
  }

  viewReportActive():void
  {
    this.titulo = "Ver Reportes Individuales".toUpperCase();
    this.enviarFlag = false;
    this.listarFlag = false;
    this.verFlag = true;
  }

}
