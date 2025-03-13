import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {

num1:number=0;
num2:number=0;
result:number=0;

calculateArea(){
  console.log(this.num1,this.num2);
  this.result=this.num1*this.num2;
  console.log(this.result);
}
calculatePerimeter(){
  console.log(this.num1,this.num2);
  this.result=2*(this.num1)+2*(this.num2);
  console.log(this.result);
}


}
