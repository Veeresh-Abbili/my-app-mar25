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
  _id_cardsService.id_cards.subscribe((data:any)=>{
    console.log(data);
  this.id_cards=data;
},(err:any)=>{
  alert("Internal Server Error")
}
)
}

}
