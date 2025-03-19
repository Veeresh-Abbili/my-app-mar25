import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  products:any= [
  {name:'pen', price:10,rating:3.7},
  {name:'book', price:50,rating:1.9},
  {name:'shirt', price:479,rating:4.3},
  {name:'shoes', price:3000,rating:4.3},
  {name:'scale', price:58790,rating:4.2},
  {name:'notebook', price:20,rating:4.8},
  ]
  states:string[]=['Andhra Pradesh','Karnataka','Kerala',
    'Maharastra','Tamilnadu','Telangana'];

    isVisible:boolean=true;
    isHidden:boolean=false;
    isDisabled:boolean=false;


    newDate:any=new Date();

}
