import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

// Event Binding
  click(){
    alert("HELLOOOOOO");
  }
  submit(){
    alert(this.mobile);
  }
// Interpolation
age:number=45;
  name:string="Raj";

// Property Binding
  isData:boolean=true;

// two way data binding
mobile:string='+19';

num1:number=0;
num2:number=0;
result:number=0;

add(){
  console.log(this.num1,this.num2);
  this.result=this.num1+this.num2;
  console.log(this.result);
}


}
