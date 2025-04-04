import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  term:string='';
  vehicles:any=[];
  constructor(private _vehicleService:VehicleService){
    this.LoadVehicles()
  }
  LoadVehicles(){
    this._vehicleService.getVehicles().subscribe((data:any)=>{
      console.log(data);
      this.vehicles=data;
    },(err:any)=>{
      alert("Internal Server Error");
    }
  );

  }
  filter(){
    this._vehicleService.getFilteredVehicles(this.term).subscribe((data:any)=>{
    console.log(data);
    this.vehicles=data;
    console.log(this.vehicles);
   },(err:any)=>{
    alert("Internal Server Error!");
   }
  )
  }
  column:string='';
  order:string='';

  sort(){
   this._vehicleService.getSortedVehicles(this.column, this.order).subscribe(
    (data:any)=>{
      console.log(data);
      this.vehicles=data;
   },(err:any)=>{
    alert('invalid data')
   })
  }

  delete(id:any){
    if(confirm("Are you sure to delete?")==true){
      this._vehicleService.deleteVehicle(id).subscribe(
        (data:any)=>{
          alert("Record Delete Succefully!");
        this.LoadVehicles();
        },(err:any)=>{
          alert("Internal Server Error");
        }
      )
    }else{
      alert("you have cancelled!")
    }
   
  }
  limit:string='';
  page:string='';
  pagination(){
    this._vehicleService.getpaginatedVehicles(this.limit,this.page).subscribe
    ((data:any)=>{
      console.log(data);
      this.vehicles=data;
    },(err:any)=>{
      alert("Internal Server Error")
    }

    )
  }

}
