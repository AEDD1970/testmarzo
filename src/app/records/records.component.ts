import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ServiceService} from '../service/service.service'
  import { from } from 'rxjs';
import { Personal } from '../models/personal';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  c: Personal [] = [] ;

  constructor( private service: ServiceService, private client:HttpClientModule ) { 
    this.getPerson();
  }


  ngOnInit() {
    this.getPerson();
  }


  getPerson(){
    this.service.getPerson().subscribe(resultado => {
      this.c = resultado.data;
      console.log(this.c);
    },
    error =>{
      console.log(JSON.stringify(error));
    });
  }

}
