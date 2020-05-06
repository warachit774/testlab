import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  @Output() emitter = new EventEmitter<string>();
  r:number=255;
  g:number=255;
  b:number=255;
  color:string="";

  constructor() { }

  ngOnInit(): void {
  }
  ngStyleMethod(){
    this.color='rgb('+this.r+','+this.g+','+this.b+')'
    this.emitter.emit(this.color)
  }

}
