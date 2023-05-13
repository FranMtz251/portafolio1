import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient ) { 

   this.cargainfo();
   this.cargarEquipo();

  }

  private cargainfo() { 
   //LEER ARCHIVO JSON
     this.http.get('assets/data/data-pagina.json')
   .subscribe( (resp: InfoPagina) => { 
      this.cargada = true
      this.info = resp;
   });
  }

  private cargarEquipo() {

     //LEER ARCHIVO JSON
     this.http.get('https://angular-html-89254-default-rtdb.firebaseio.com/Equipo.json')
   .subscribe( (resp: any) => { 
 
      this.equipo = resp;
      //console.log(resp);
   });

  }
}
