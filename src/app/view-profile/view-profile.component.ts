import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

role_id : string = "2";
isStudent = false;
isFaculty = false;

 


  constructor() { }

  ngOnInit(): void {
    if(this.role_id == "1")
    {
      this.isFaculty=true;
      this.isStudent=false;
    }
    else if(this.role_id=="2")
    {
      this.isStudent=true;
      this.isFaculty=false;
    }
    else{
      this.isFaculty=false;
      this.isStudent=false;
    }
   

  }

}
