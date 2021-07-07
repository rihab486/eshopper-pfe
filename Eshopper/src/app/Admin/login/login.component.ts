import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSignedIn = false
  submitted = false;
  provider: any;
  user : any;
  loginForm!: FormGroup;
  constructor(private afStorage: AngularFireStorage,private fb: FormBuilder,
    private userservice: UserService) 
   { 
    let formControls = {
      Username: new FormControl(
        '',[Validators.required]
      ),
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])
    }
    this.loginForm = this.fb.group(formControls)
   }
   get email() { return this.loginForm.get('email') }
   get password() { return this.loginForm.get('password')
  }

  ngOnInit(): void {
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
  }
  async onSignin(email:string,password:string){
    await this.userservice.signin(email,password)
    if(this.userservice.isLoggedIn)
    this.isSignedIn = true
  }
  async onSignup(email:string,password:string){
    await this.userservice.signup(email,password)
    if(this.userservice.isLoggedIn)
    this.isSignedIn = true
  }

}
