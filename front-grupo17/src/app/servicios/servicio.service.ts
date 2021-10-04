import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(    private http: HttpClient) { }
  api1 = 'http://3.131.83.253:3001/s1'

  getReporte()
  {
    return this.http.get<any>(`${this.api1}/reporte/obtenerTodos`);
  }

  Buscar(carnet:any){
    return this.http.post<any>(`${this.api1}/reporte/obtener`,carnet);
  }
  
  insertar(reporte:any)
  {
    return this.http.post<any>(`${this.api1}/reporte/insertar`,reporte)
  }
}
