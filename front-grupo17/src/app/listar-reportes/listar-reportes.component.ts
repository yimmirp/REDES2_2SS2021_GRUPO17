import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../main/main.component'
import { ServicioService } from 'src/app/servicios/servicio.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

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
    console.log("--URI PRODUCTION: "+ environment.api);
    //console.log(environment.envVar);

   // console.log(JSON.stringify(process.env.Signature))
    //console.log(JSON.stringify(process.env.loadbalancer))

    this.vertodo();
    //console.log(environment.api)

  }
buscarc:string="";
Reporte:any = [];
ServerResponse:string=""


  buscar(){
    this.Reporte=[];
    console.log(this.buscarc)
    if(this.buscarc==""){
this.vertodo();
    }else{
      this.service.Buscar(this.buscarc)

      .subscribe(
        res => {
          const gen=res.data;
         console.log(res.data)
         for(var i=0; i<gen.length ; i++){
          console.log(gen[i]);
          
          this.Reporte.push({nombre:gen[i].nombre,carnet:gen[i].carnet,curso:gen[i].curso,servidor:res.Servidor,descripcion:gen[i].descripcion});
        }
        console.log(this.Reporte)
        },
        err => console.log(err)
      )
  
    }
   
  }


  vertodo(){
    this.service.getReporte()
    .subscribe(
      res => {
        const gen=res.data;
            console.log(res);
        for(var i=0; i<gen.length ; i++){
          console.log(gen[i]);
          
          this.Reporte.push({
            nombre:gen[i].nombre,
            carnet:gen[i].carnet,
            curso:gen[i].curso,
            servidor:res.Servidor,
            descripcion:gen[i].descripcion,
            fecha:gen[i].date,
            signature:gen[i].signature
  
          });

          this.ServerResponse=res.Servidor;
        }
        console.log(this.Reporte)
      },
      err => console.log(err)
    )

  }


  
}
