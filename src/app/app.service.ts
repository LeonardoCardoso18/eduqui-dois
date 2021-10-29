import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  getDeliveries() {
    throw new Error('Method not implemented.');
  }

  constructor(public httpClient: HttpClient) { }

  getMaterias(): Observable<any>{
     return this.httpClient.get('http://localhost:3000/materias/materias')
  }
}
