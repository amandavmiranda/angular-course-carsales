import { Component, OnInit } from '@angular/core';
import { RequestLogin } from 'src/app/resource/models/RequestLogin';
import { LoginService } from 'src/app/resource/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public requestLogin: RequestLogin = new RequestLogin;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public doLogin(): void {
    this.loginService.doLogin(this.requestLogin).subscribe(
      (data) => {
      console.log(data);
    },
      (error) => {
        console.error(error);
      }
    );
  }
}
