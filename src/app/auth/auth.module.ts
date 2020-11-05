import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {PurpleBtnComponent} from "../shared/purple-btn/purple-btn.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [LoginComponent, SignupComponent, PurpleBtnComponent],
  exports: [
    PurpleBtnComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
  ]
})
export class AuthModule { }
