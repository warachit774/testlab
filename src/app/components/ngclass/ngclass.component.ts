import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {
  status:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }
  ngClassMethod(){
    this.status=!this.status
  }

}
