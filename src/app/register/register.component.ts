import { Component, OnInit } from '@angular/core';
import { HttpClientServiceService, User } from '../http-client-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  /* isDisplay = false;
  Display()
   {
     this.isDisplay=!this.isDisplay;
    
   }
 */
  isDisplay = false;
  isFaculty = false;
  onOptionsSelected(value: string) {
    if (value == "Student") {
      this.isFaculty = false;
      this.isDisplay = true;
    }
    else if (value == "Faculty") {
      this.isDisplay = false;
      this.isFaculty = true;
    }
    else {
      this.isDisplay = false;
      this.isFaculty = false;
    }
  }

  user: User = new User(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);

  constructor(private httpClientService: HttpClientServiceService) { }

  ngOnInit() {
  }

  Register(user: User) {
    this.httpClientService.Register(user).subscribe(res => {
      alert("Hieee");
      this.user.fName = "";
      this.user.lName = "";
      this.user.email_id = "";
      this.user.mobile_no = "";
      this.user.address = "";
      this.user.city = "";
      this.user.state = "";
      this.user.role_id = null;
      this.user.fName_f = "";
      this.user.lName_f = "";
      this.user.email_id_f = "";
      this.user.mobile_no_f = "";
      this.user.dob = "";
      this.user.gender = "";
      this.user.student_class = null;
      this.user.faculty_class = null;
      this.user.joining_date = "";
      this.user.password = "";

      console.log(this.user.fName, this.user.lName, this.user.email_id, this.user.mobile_no, this.user.address, this.user.state);
    })
  }


}
