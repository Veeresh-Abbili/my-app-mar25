import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

id:number=0;
constructor(private _vehicleService:VehicleService,
  private _router:Router,
  private _activatedRoute:ActivatedRoute){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
      },(err:any)=>{
        alert("Inernal Server Error")
      }
    )

    if(this.id){
    _vehicleService.getVehicle(this.id).subscribe(
    (data:any)=>{
      console.log(data);
      this.vehicleForm.patchValue(data);
    },(err:any)=>{
      alert("Internal Server Error")
    }
  )
  }
}

  creat(){
  if(this.id){
    console.log(this.vehicleForm.value);// HERE value compulsory for avoid more data
    this._vehicleService.updateVehicle(this.id,this.vehicleForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("Vehicle Record Update Successfully!");
        this._router.navigateByUrl("/dashboard/vehicle");
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }else{
     console.log(this.vehicleForm.value);
     this._vehicleService.creatVehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("New Vehicle Created Successfully");
        this._router.navigateByUrl("/dashboard/vehicle");
      },(err:any)=>{
        alert("Internal Server Error")
      }
     )
  }
  }
}

