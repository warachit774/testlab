import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() PData :number;
  @Output() emitter = new EventEmitter<number>();
  CData :number;
  constructor() { }

  ngOnInit(): void {
    this.CData=0
  }
  C2P(){
    this.CData+=1
    this.emitter.emit(this.CData)
  }


}
