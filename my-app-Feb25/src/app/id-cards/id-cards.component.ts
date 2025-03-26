import { Component } from '@angular/core';
import { IdCardsService } from '../id-cards.service';


@Component({
  selector: 'app-id-cards',
  templateUrl: './id-cards.component.html',
  styleUrls: ['./id-cards.component.css']
})

export class IdCardsComponent {
  id_cards:any=[];
  constructor(private _id_cardsService:IdCardsService){
  _id_cardsService.getid_cards().subscribe((data:any)=>{
    console.log(data);
  this.id_cards=data;
},(err:any)=>{
  alert("Internal Server Error")
}
)
}
term:any='';
  filter(){
   this._id_cardsService.getfilteredid_cards(this.term).subscribe((data:any)=>{
    console.log(data);

    this.id_cards=data;
    console.log(this.id_cards);

  },(err:any)=>{
    alert("Internal Server Error");
  })
}
column:string='';
order:string='';
sort(){
  this._id_cardsService.getSortedid_cards(this.column,this.order).subscribe(
    (data:any)=>{
      console.log(data);
      this.id_cards=data;
    },(err:any)=>{
      alert('invalid data')
    }
  )
}
limit:string='';
page:string='';
pagination(){
  this._id_cardsService.getpaginationid_cards(this.limit,this.page).subscribe(
    (data:any)=>{
      console.log=data;
      this.id_cards=data;
    },(err:any)=>
      alert("Internal Server Error")
  )
}

}
