import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../login.service';
import { TeamNamesService } from '../team-names.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {
  teamNames: any = {};
  passwordInfo = new FormGroup({
    oldPassword: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
  })

  deleteInfo = new FormGroup({
    password: new FormControl('', [Validators.required])
  })

  favTeamInfo = new FormGroup({
    favoriteTeamId: new FormControl('', [Validators.required])
  });

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

  isFavoriteTeam(teamId){
    console.log(+this.cookieService.get('favoriteTeamId'), teamId);
    return +this.cookieService.get('favoriteTeamId') == teamId;
  }

  submitChangePassword() {
    console.log("changing password");
    
    var passwordUpdateObject = {
      id: parseInt(this.cookieService.get('id')),
      oldPassword: this.passwordInfo.controls.oldPassword.value,
      newPassword: this.passwordInfo.controls.newPassword.value
    };
    
    this.loginService.changePassword(passwordUpdateObject).subscribe(res => {
      console.log("password successfully changed.")
    })

  }

  deleteAccount() {
    var accountDeleteObject = {
      id: parseInt(this.cookieService.get('id')),
      password: this.deleteInfo.controls.password.value
    };
    
    this.loginService.deleteAccount(accountDeleteObject).subscribe(res => {
      console.log("DELETE operation completed.");
      this.cookieService.deleteAll();
      this.router.navigate(['/login']);
    });
  }

  submitChangeFavTeam() {
    let updateTeamObject = {
      id: +this.cookieService.get('id'),
      favoriteTeamId: this.favTeamInfo.controls.favoriteTeamId.value
    }
    console.log(this.favTeamInfo.controls.favoriteTeamId.value);
    this.loginService.changeFavoriteTeam(updateTeamObject).subscribe(res => {
      this.cookieService.set('favoriteTeamId', this.favTeamInfo.controls.favoriteTeamId.value);
      console.log("Updated favorite team.");
    });

  }

}
