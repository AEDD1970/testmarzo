import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../service/service.service'
import {FormBuilder, Validators} from '@angular/forms';
import {Personal} from '../models/personal'

@Component({
  selector: 'app-create-records',
  templateUrl: './create-records.component.html',
  styleUrls: ['./create-records.component.css']
})
export class CreateRecordsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private service: ServiceService ) { }

    get documento(){
      return this.registerForm.get('documento')
    }

   
     registerForm = this.formBuilder.group({
      documento : ['', Validators.required],
      name_lastname: [''],
      init_date:[''],
      final_date:[''],
      time_init_turn:[''],
      time_final_turn:[],
      time_init_extra_hour:[''],
      time_final_extra_hour:['']
     });


  ngOnInit(): void {
  }
  submit(){
    console.log(this.registerForm);
    let obj = new Personal();
    obj.documento = this.registerForm.get('documento').value;
    obj.name_lastname = this.registerForm.get('name_lastname').value;
    obj.init_date = this.registerForm.get('init_date').value;
    obj.final_date = this.registerForm.get('final_date').value;
    obj.time_init_turn = this.registerForm.get('time_init_turn').value;
    obj.time_final_turn = this.registerForm.get('time_final_turn').value;
    obj.time_init_extra_hour = this.registerForm.get('time_init_extra_hour').value;
    obj.time_final_extra_hour = this.registerForm.get('time_final_extra_hour').value;
    this.service.createPerson(obj).then(r => {
      console.log(r);
      alert("hola");
      this.refrescar();
    })

  }


  refrescar(){
    this.registerForm.patchValue({
      documento : '',
      name_lastname: '',
      init_date: '',
      final_date: '',
      time_init_turn: '',
      time_final_turn: '',
      time_init_extra_hour: '',
      time_final_extra_hour: ''
    })
  }


}
