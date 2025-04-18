import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cretasker',
  standalone: false,
  templateUrl: './cretasker.component.html',
  styleUrl: './cretasker.component.css'
})
export class CretaskerComponent {
  taskForm: FormGroup = new FormGroup({});
  constructor(builder: FormBuilder)
  {
    this.taskForm = builder.group({type: new FormControl('', Validators.required),
      priority: new FormControl(''),
      status: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      actor: new FormControl(''),
      creator: new FormControl('', Validators.required)})
  }
  onSubmit(){
    if(sessionStorage.getItem('amount') != null)
    {
      var amount = Number.parseInt(sessionStorage.getItem('amount') || '0');
      amount++;
      sessionStorage.removeItem('amount');
      sessionStorage.setItem('amount', amount.toString());
      sessionStorage.setItem('type ' + amount, this.taskForm.controls['type'].value);
      sessionStorage.setItem('priority ' + amount, this.taskForm.controls['priority'].value);
      sessionStorage.setItem('status ' + amount, this.taskForm.controls['status'].value);
      sessionStorage.setItem('title ' + amount, this.taskForm.controls['title'].value);
      sessionStorage.setItem('description ' + amount, this.taskForm.controls['description'].value);
      sessionStorage.setItem('actor ' + amount, this.taskForm.controls['actor'].value);
      sessionStorage.setItem('creator ' + amount, this.taskForm.controls['creator'].value);
      sessionStorage.setItem('date ' + amount, new Date().toDateString());
      sessionStorage.setItem('datech ' + amount, new Date().toDateString());
    }
    else
    {
      sessionStorage.setItem('amount', '1');
      sessionStorage.setItem('type 1', this.taskForm.controls['type'].value);
      sessionStorage.setItem('priority 1', this.taskForm.controls['priority'].value);
      sessionStorage.setItem('status 1', this.taskForm.controls['status'].value);
      sessionStorage.setItem('title 1', this.taskForm.controls['title'].value);
      sessionStorage.setItem('description 1', this.taskForm.controls['description'].value);
      sessionStorage.setItem('actor 1', this.taskForm.controls['actor'].value);
      sessionStorage.setItem('creator 1', this.taskForm.controls['creator'].value);
      sessionStorage.setItem('date 1', new Date().toDateString());
      sessionStorage.setItem('datech 1', new Date().toDateString());
    }
  }
}
