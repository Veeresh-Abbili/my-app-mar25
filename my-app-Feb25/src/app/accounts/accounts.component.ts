import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  accounts:any=[];
  constructor(private _accountService:AccountsService){
   this.LoadAccounts() 
  }
  LoadAccounts(){
    this._accountService.getAccounts().subscribe((data:any)=>{
      console.log(data);
      this.accounts=data;
    },(err:any)=>{
      alert("Internal Server Error");
    }
    );
  }
  term:any='';
  filter(){
    this._accountService.getFilteredAccounts(this.term).subscribe((data:any)=>{
      console.log(data);

      this.accounts=data;
      console.log(this.accounts);

    },(err:any)=>{
      alert("Internal Server Error!");
    }
    )
    }
    column:string='';
    order:string='';
    
    sort(){
      this._accountService.getSortedAccounts(this.column,this.order).subscribe(
        (data:any)=>{
          console.log(data);
          this.accounts=data;
        },(err:any)=>{
          alert('invalid data')
        })
    }
    limit:string='';
    page:string='';
    pagination(){
      this._accountService.getpaginatedAccounts(this.limit,this.page).subscribe((data:any)=>{
        console.log(data);
        this.accounts=data;
      },(err:any)=>{
        alert("Internal Server Error")
      }
     )
    }
    delete(id:any){
      if(confirm("are you sure to delete?")==true){
        this._accountService.deleteAccount(id).subscribe(
          (data:any)=>{
            alert("Record Delete Succefully!");
          },(err:any)=>{
            alert("Internal Server Error");
          } 
        )
      }else{
        alert("you have cancelled!")
      }
    }
  }
