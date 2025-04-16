import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  title = 'digital-department-application';
  greeting = "";
  OnSayHi(): void{
    alert("Hello, " + this.greeting);
  }
  ngOnChanges(): void{
    console.log("OnChanges")
  }
  ngOnInit(): void{
    console.log("OnInit")
  }
  ngDoCheck(): void{
    console.log("DoCheck")
  }
  ngAfterContentInit(): void{
    console.log("AfterContentInit")
  }
  ngAfterContentChecked(): void{
    console.log("AfterContentChecked")
  }
  ngAfterViewInit(): void{
    console.log("AfterViewInit")
  }
  ngAfterViewChecked(): void{
    console.log("AfterViewChecked")
  }
  ngOnDestroy() : void{
    console.log("OnDestroy")
  }

}
