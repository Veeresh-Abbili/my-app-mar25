import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent {

  @Input() max:number=0;

  @Output() textareaEvent:EventEmitter<number>=new EventEmitter();

  inputValue:string=''

  send(){
    this.textareaEvent.emit(50);
    alert("50")
  }

}
