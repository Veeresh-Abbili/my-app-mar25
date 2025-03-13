import { Component } from '@angular/core';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EMIComponent {
  loanAmount:number=0;
interestRate:number=0;
loanTenure:number=0;
EMI:number=0;

emi(){
  console.log(this.loanAmount,this.interestRate,this.loanTenure);
  this.EMI=(this.loanAmount*this.interestRate*(1+this.interestRate)**this.loanTenure)/(((1+this.interestRate)**this.loanTenure) -1);
  console.log(this.EMI);
  
}

}
