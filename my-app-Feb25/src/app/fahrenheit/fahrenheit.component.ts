import { Component } from '@angular/core';

@Component({
  selector: 'app-fahrenheit',
  templateUrl: './fahrenheit.component.html',
  styleUrls: ['./fahrenheit.component.css']
})
export class FahrenheitComponent {

 celsius:number=0;
 fahrenheit:number| null=null;

  
  convert1(){
    this.fahrenheit=(this.celsius*9/5)+32;
  }

}
