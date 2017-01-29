import {Component, OnInit} from '@angular/core';
import {LoginService} from "./services/login.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Credentials} from "../interfaces/credentials.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WuzlHub';
  public isLoggedIn: boolean = false;

  loginfg: FormGroup;
  constructor (private loginService: LoginService,
               private formBuilder: FormBuilder) {
  }



  ngOnInit(): void {
    this.isLoggedIn = this.loginService.getLoginStatus();
    this.loginfg = this.formBuilder.group({
      User: ['', [Validators.required, Validators.minLength(2)]],
      Password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  checkLogin(user: string, password: string): void {
    this.loginService.checkLogin(user, password)
      .subscribe(isLoggedIn => {
        this.loginService.setLogin(user, password, isLoggedIn);
        this.isLoggedIn = isLoggedIn;
        this.loginfg.patchValue({User: '', Password: ''});
      });
  }

  onLogin({value, valid}: { value: Credentials, valid: boolean }) {
    console.log(value, valid);
    this.checkLogin(value.User, value.Password);
  }

  onLogout() {
    this.loginService.logout();
    this.isLoggedIn = this.loginService.getLoginStatus();
  }
}




