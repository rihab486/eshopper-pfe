import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Firebase
// Firebase modules
import "firebase/firestore";
import "firebase/auth";
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import firebase from 'firebase/app';
//uploadimage
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { AngularFireStorageReference, AngularFireUploadTask } from "@angular/fire/storage";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SignupComponent } from './User/signup/signup.component';
import { SigninComponent } from './User/signin/signin.component';
import { HomeComponent } from './User/home/home.component';
import { DashboarduserComponent } from './User/dashboarduser/dashboarduser.component';
import { DashboardaComponent } from './Admin/dashboarda/dashboarda.component';
import { LoginComponent } from './Admin/login/login.component';
import { FooterComponent } from './Admin/footer/footer.component';
import { NavbarComponent } from './Admin/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    DashboarduserComponent,
    DashboardaComponent,
    LoginComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule, RouterModule,
    AppRoutingModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule, FormsModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    MatCardModule, MatFormFieldModule,
    MatDialogModule,
    MatProgressBarModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBOOxcF2tFLdK3O0m2kyNxs_ZBGM-g3KAA",
      authDomain: "eshopper-f1e90.firebaseapp.com",
      projectId: "eshopper-f1e90",
      storageBucket: "eshopper-f1e90.appspot.com",
      messagingSenderId: "763398719839",
      appId: "1:763398719839:web:12154f0073cd1d0ad94eea"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
