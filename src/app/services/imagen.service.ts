import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  private error$ = new Subject<string>();
  private terminoBusqueda$ = new Subject<string>();

  constructor() { }

  //Metodos para el envio del mensaje de Error
  setError(mensaje: string){
    this.error$.next(mensaje);
  }
  getError():Observable<string>{
   return this.error$.asObservable();

  }
  //______________________________________________
  

  //Metodos para el envío de la palabra de busqueda
  setTerminoBusqueda(termino: string){
    this.terminoBusqueda$.next(termino)
  }
  getTerminoBusqueda():Observable<string>{
    return this.terminoBusqueda$.asObservable();
  }
}
