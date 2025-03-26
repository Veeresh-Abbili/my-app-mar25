import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  capture(value:number){  // by using variable string value we want to replace number
    alert(value);
  }
  data:any
  catch(value:number){
    
  }

}
