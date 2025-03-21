import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-creatvehicle',
  templateUrl: './creatvehicle.component.html',
  styleUrls: ['./creatvehicle.component.css']
})
export class CreatvehicleComponent {
public vehicleForm:FormGroup=new FormGroup({
  Vehicle:new FormControl(),
  color:new FormControl(),
  cost:new FormControl(),
  fuel:new FormControl(),
})
constructor(private _vehicleService:VehicleService,
  private _router:Router){}
creat(){
console.log(this.vehicleForm.value);// HERE value compulsory for avoid more data
this._vehicleService.creatVehicle(this.vehicleForm.value).subscribe(
  (data:any)=>{
    console.log(data);
    alert("New Vehicle Created Successfully");
    this._router.navigateByUrl("/dashboard/Vehicle");
  },(err:any)=>{
    alert("Internal Server Error");
  }
)
}
}