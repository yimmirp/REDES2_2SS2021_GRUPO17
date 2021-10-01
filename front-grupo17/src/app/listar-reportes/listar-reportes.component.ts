import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../main/main.component'
import { ServicioService } from 'src/app/servicios/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-reportes',
  templateUrl: './listar-reportes.component.html',
  styleUrls: ['./listar-reportes.component.css']
})
export class ListarReportesComponent implements OnInit {

  constructor(private mainComponent: MainComponent,public service: ServicioService, public router: Router) {
    this.mainComponent.listReportsActive();
  }

  ngOnInit(): void {
    this.vertodo();
  }
buscarc:string="";
Reporte = [];



  buscar(){
    console.log(this.buscarc)
    this.service.Buscar(this.buscarc)

    .subscribe(
      res => {
       this.Reporte=res;
      },
      err => console.log(err)
    )

  }


  vertodo(){
    this.service.getReporte()

    .subscribe(
      res => {
       this.Reporte=res;
      },
      err => console.log(err)
    )

  }


  
}
