import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

isDisplay=false;
onOptionsSelected(value : string)
{
 if(value != "0")
 {
   this.isDisplay = true;
 }
 else
 {
  this.isDisplay = false;
 }
}
  constructor() { }

  ngOnInit(): void {
  }

}
