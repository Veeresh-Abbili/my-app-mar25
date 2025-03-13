import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  num1:number=0;
  result:number=0;
  
  calculateArea(){
    console.log(this.num1);
    this.result=(this.num1)^2*3.14;
    console.log(this.result);
  }
  calculatePerimeter(){
    console.log(this.num1);
    this.result=this.num1*2*3.14;
    console.log(this.result);
  }
}
