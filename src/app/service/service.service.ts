import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { from } from 'rxjs';
import { Observable } from 'rxjs';
import { Personal} from '../models/personal'
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  get url() { return "http://localhost:3000/" }

  get post (){ return "https://jsonplaceholder.typicode.com"}

  constructor(private httpCliente: HttpClient, private client: HttpClientModule) { }

  // records person
  getPerson(): Observable<any> {
    return this.httpCliente.get<any>(this.url + "db")
  }

  //create Person

  createPerson(type: Personal) {
    let json = JSON.stringify(type);
    let headers = new HttpHeaders().set('Content-Type', 'aplication/json');
    return this.httpCliente.post(this.post + "/posts", json, { headers:headers }).toPromise();

  }
  

}
