import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  //Admin =0
//Faculty =1
//Student = 2
//Parent = 3


  role_id : string = "1";
  isDisplay = false;
  isOther =false;

  constructor() { }

  ngOnInit(): void {

    if(this.role_id =="1")
    {
      this.isDisplay=true;
      this.isOther= false;
    }
    else
    {
      this.isOther=true;
      this.isDisplay=false;
    }
  }


}
