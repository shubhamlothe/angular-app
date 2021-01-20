import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {



  role_id : string = "2";
  isDisplay = false;

  constructor() { }

  ngOnInit(): void {

    if(this.role_id =="1")
    {
      this.isDisplay=true;
    }
    else
    {
      this.isDisplay=false;
    }
  }

}
