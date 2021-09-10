import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { TeamNamesService } from '../team-names.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  teamNames: any = {}
  signupInfo = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    favoriteTeamId: new FormControl(-1)
  })
  loginInfo = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })
  didLoginFail: boolean = false;

  constructor(
    private teamNamesService: TeamNamesService,
    private loginService: LoginService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.teamNamesService.getTeamNames().subscribe(res => {
      this.teamNames = res;
    });
  }

  signupSubmitForm() {
    var jsonObject = {
        username: this.signupInfo.controls.username.value,
        password: this.signupInfo.controls.password.value,
        favoriteTeamId: this.signupInfo.controls.favoriteTeamId.value
    };
    
    this.loginService.postSignup(jsonObject).subscribe(res => {
      var response: any = res;
      this.cookieService.set('username', response.username);
      this.cookieService.set('id', response.id);
      this.cookieService.set('favoriteTeamId', response.favoriteTeamId);
      this.router.navigate(['/home']);
    });
  }

  loginSubmitForm() {
    var jsonObject = {
      username: this.loginInfo.controls.username.value,
      password: this.loginInfo.controls.password.value
    };

    this.loginService.postLogin(jsonObject).subscribe(res => {
      var response: any = res;
      this.cookieService.set('username', response.username);
      this.cookieService.set('id', response.id);
      this.cookieService.set('favoriteTeamId', response.favoriteTeamId);
      this.router.navigate(['/home']);
    }, error => {
      this.didLoginFail = true;
    });

  }

}
