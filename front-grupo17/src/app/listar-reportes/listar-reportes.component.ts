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
Reporte:any = [];



  buscar(){
    console.log(this.buscarc)
    this.service.Buscar(this.buscarc)

    .subscribe(
      res => {
       this.Reporte=res.data;
      },
      err => console.log(err)
    )

  }


  vertodo(){
    this.service.getReporte()
    .subscribe(
      res => {
        const gen=res.data;
            console.log(gen);
        for(var i=0; i<gen.length ; i++){
          console.log(gen[i]);
          
          this.Reporte.push({nombre:gen[i].nombre,carnet:gen[i].carnet,curso:gen[i].curso,servidor:res.servidor});
        }
        console.log(this.Reporte)
      },
      err => console.log(err)
    )

  }


  
}
