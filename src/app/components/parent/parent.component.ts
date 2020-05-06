import { Component, OnInit, ViewChild, AfterContentChecked } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterContentChecked {
  @ViewChild(ChildComponent)
  childComponent: ChildComponent;

  PData: number;
  CData:number=0;
  check:boolean=true;
  text:string="";
  status:string="";

  constructor() { }

  ngOnInit(): void {
    this.PData = 0;
  }
  ngAfterContentChecked(){
    if(this.text == '123456'){
      this.status ="yes"
    }
    else{
      this.status = "no"
    }
    console.log("content start!")
  }
  OnC2C(){
    this.PData+=1;
  }
  recieve($e){
    this.CData=$e
  }
  Cvia(){
    this.childComponent.C2P();
  }
  show(){
    this.check=!this.check
  }

}
