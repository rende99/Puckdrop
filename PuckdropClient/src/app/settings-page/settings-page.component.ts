import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

  passwordInfo = new FormGroup({
    oldPassword: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
  })

  constructor(private loginService: LoginService, private cookieService: CookieService) { }

  ngOnInit() {
  }

  submitChangePassword() {
    console.log("changing password");
    
    var passwordUpdateObject = JSON.stringify({
      id: parseInt(this.cookieService.get('id')),
      oldPassword: this.passwordInfo.controls.oldPassword.value,
      newPassword: this.passwordInfo.controls.newPassword.value
    })
    this.loginService.changePassword(passwordUpdateObject).subscribe(res => {
      var response: any = res;
      console.log(response);
    })
  }

}
