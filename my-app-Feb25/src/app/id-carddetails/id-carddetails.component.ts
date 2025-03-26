import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdCardsService } from '../id-cards.service';

@Component({
  selector: 'app-id-carddetails',
  templateUrl: './id-carddetails.component.html',
  styleUrls: ['./id-carddetails.component.css']
})
export class IdCarddetailsComponent {
  id:number=0;
  id_card:any='';

  constructor(private _activatedroute:ActivatedRoute,private id_cardService:IdCardsService){
    _activatedroute.params.subscribe(
      (data:any)=>{
        console.log(data);
        this.id=data.id;
        console.log(this.id)
      },(err:any)=>{
        alert("Internal Server Error!")
      }
    )
    id_cardService.getid_card(this.id_card).subscribe(
      (data:any)=>{
        console.log(data);
        this.id_card=data;
      },(err:any)=>{
        alert("Internal Server Error!")
      }
    )
  }

}
