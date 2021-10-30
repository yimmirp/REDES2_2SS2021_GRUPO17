import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(    private http: HttpClient) { }
  api1 = environment.api;


  getReporte()
  {
    return this.http.get<any>(`${this.api1}/reporte/obtenerTodos`);
  }

  Buscar(carnet:any){
    return this.http.get<any>(`${this.api1}/reporte/obtener/${carnet}`);
  }
  
  insertar(reporte:any)
  {
    return this.http.post<any>(`${this.api1}/reporte/insertar`,reporte)
  }
}
