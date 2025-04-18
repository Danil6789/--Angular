import { AfterContentChecked, Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
interface Data{
  number: number,
  type: string,
  priority: string,
  status: string,
  title: string,
  description: string,
  actor: string,
  creator: string,
  date: string,
  datech: string 
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterContentChecked{
  title = 'lab6';
  data:Data[] = [];
  counter = 0;
  ngAfterContentChecked(): void {
    var amount: number = Number.parseInt(sessionStorage.getItem('amount') || '0');
    if(amount != this.counter)
    {
      this.counter++;
        this.data.push({
          number: this.counter,
          type: sessionStorage.getItem('type ' + this.counter) || '',
          priority: sessionStorage.getItem('priority ' + this.counter) || '',
          status: sessionStorage.getItem('status ' + this.counter) || '',
          title: sessionStorage.getItem('title ' + this.counter) || '',
          description: sessionStorage.getItem('description ' + this.counter) || '',
          actor: sessionStorage.getItem('actor ' + this.counter) || '',
          creator: sessionStorage.getItem('creator ' + this.counter) || '',
          date: sessionStorage.getItem('date ' + this.counter) || '',
          datech: sessionStorage.getItem('datech ' + this.counter) || ''
        });
      }
      }
  }
