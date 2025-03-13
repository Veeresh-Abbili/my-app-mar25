import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-interest',
  templateUrl: './simple-interest.component.html',
  styleUrls: ['./simple-interest.component.css']
})
export class SimpleInterestComponent {
  
  principal:number=0;
  rate:number=0;
  time:number=0;
  result:number=0;

  calculate(){
    console.log(this.principal,this.rate,this.time);
    this.result=(this.principal*this.rate*this.time)/100;
    console.log(this.result);
  }

}
