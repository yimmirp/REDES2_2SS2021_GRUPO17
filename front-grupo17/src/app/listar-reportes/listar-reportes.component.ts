import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../main/main.component'

@Component({
  selector: 'app-listar-reportes',
  templateUrl: './listar-reportes.component.html',
  styleUrls: ['./listar-reportes.component.css']
})
export class ListarReportesComponent implements OnInit {

  constructor(private mainComponent: MainComponent) {
    this.mainComponent.listReportsActive();
  }

  ngOnInit(): void {
  }
buscarc:string="";
  buscar(){}
}
