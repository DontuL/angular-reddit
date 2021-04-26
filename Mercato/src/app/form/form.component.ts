import { Component, OnInit } from '@angular/core';
import {  //Importa FormBuilder e FormGroup
  FormBuilder,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
myForm: FormGroup;  //Dichiara una variabile di tipo FormGroup
myForm1: FormGroup;
  constructor(fb: FormBuilder) {
     this.myForm = fb.group({
       'nome': [''], 'pasword':['']

    });
  }


  ngOnInit(): void {
  }
 onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

}
