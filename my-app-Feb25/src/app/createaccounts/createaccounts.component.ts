import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createaccounts',
  templateUrl: './createaccounts.component.html',
  styleUrls: ['./createaccounts.component.css']
})
export class CreateaccountsComponent {
  public accountForm:FormGroup=new FormGroup({
    account_name:new FormControl(),
    available_balance:new FormControl(),
    account_number:new FormControl(),
    city:new FormControl(),
    profile_picture:new FormControl(),
    ifsc_code:new FormControl(),
  })
  
  constructor(private _accountService:AccountsService, private _router:Router){}

 create(){
  //console.log(this.accountForm.value);
  this._accountService.creatAccount(this.accountForm.value).subscribe
  ((data:any)=>{
  console.log(data);
  alert("New Account Created Succesfully");
  this._router.navigateByUrl("/dashboard/Accounts");
},(err:any)=>{
  alert("Internal Server Error");
}
)
 }
}
