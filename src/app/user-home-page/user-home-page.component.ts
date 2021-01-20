import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent implements OnInit {

//Admin =0
//Faculty =1
//Student = 2
//Parent = 3



  role_id : string = "3";
 isDisplay = false;
  isFaculty = false;
  isAdmin =false;
  isStudent = false;
  isParent = false;

  

  constructor() { }

  ngOnInit(): void {
    if(this.role_id == "0")
    {
     this.isDisplay = true;
     this.isAdmin=true;
     this.isFaculty=false;
     this.isStudent=false;
    }
    else if(this.role_id=="1")
    {

      this.isDisplay=true;
      this.isFaculty=true;
      this.isAdmin=false;
      this.isStudent=false;
    }
    else if(this.role_id=="2" || this.role_id=="3")
    {
      this.isDisplay=false;
      this.isStudent=true;
      this.isAdmin=false;
      this.isFaculty=false;
    }
    else
    {
      this.isDisplay=false;
      this.isAdmin=false;
      this.isFaculty=false;
      this.isStudent=false;
    }
   
   
   


  }

}
