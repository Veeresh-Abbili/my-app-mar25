import { Component } from '@angular/core';
import { AllEmployeesService } from '../all-employees.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent {
  term:string='';
  allemployees:any=[];
  constructor(private _allEmployeesService:AllEmployeesService){
    this._allEmployeesService.getAllEmployees().subscribe(
      (data:any)=>{
        console.log(data);
        this.allemployees=data;
      },(err:any)=>{
        alert("Internal Server Error")
      }
    ) 
    
  }
  filter(){
    this._allEmployeesService.getfilteredAllEmployees(this.term).subscribe(
      (data:any)=>{
        console.log(data);
        this.allemployees=data;
        console.log(this.allemployees);
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
  column:string='';
  order:string='';
  sort(){
    this._allEmployeesService.getsortedAllEmployees(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.allemployees=data;
        console.log(this.allemployees);
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
  limit:string='';
  page:string='';
  pagination(){
    this._allEmployeesService.getpaginatedAllEmployees(this.limit,this.page).subscribe(
      (data:any)=>{
        console.log(data);
        // this.allemployees=data;
        // console.log(this.allemployees);
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
}
