import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() value: string = 'Submit';

  username: string = '';
  password: string = '';
  isInvalid: boolean = false;
  isValid: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if(this.username === 'qwerty' && this.password === '123') {
      this.isValid = true
      this.isInvalid = false
      this.router.navigate(['main', this.username]);
    } else {
      this.isValid = false
      this.isInvalid = true
    }
    console.log(this.username + ' ' + this.password)
  }
}
