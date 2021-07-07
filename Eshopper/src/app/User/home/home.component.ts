import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  @Output() isLogout = new EventEmitter<void>()
  constructor(private userservice: UserService) { }

  ngOnInit(): void { 
  }
logout(){
  this.userservice.logout()
  this.isLogout.emit()
}  
}
