import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../main/main.component'

@Component({
  selector: 'app-ver-reporte',
  templateUrl: './ver-reporte.component.html',
  styleUrls: ['./ver-reporte.component.css']
})
export class VerReporteComponent implements OnInit {

  constructor(private mainComponent: MainComponent) {
    this.mainComponent.viewReportActive();
  }

  ngOnInit(): void {
  }

}
