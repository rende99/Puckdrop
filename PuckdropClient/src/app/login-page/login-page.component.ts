import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TeamNamesService } from '../team-names.service';

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
  constructor(private teamNamesService: TeamNamesService) { }

  ngOnInit() {
    this.teamNamesService.getTeamNames().subscribe(res => {
      this.teamNames = res;
      console.log(res);
      console.log("Teams above.");
    });
  }

  signupSubmitForm() {
    console.log(`Signup process triggered with the following information: 
    username: ${this.signupInfo.controls.username.value}
    password: ${this.signupInfo.controls.password.value}
    favoriteTeamId: ${this.signupInfo.controls.favoriteTeamId.value}
    `)

  }

  loginSubmitForm() {
    console.log(`Login process triggered with the following information: 
    username: ${this.loginInfo.controls.username.value}
    password: ${this.loginInfo.controls.password.value}
    `)
  }

}
