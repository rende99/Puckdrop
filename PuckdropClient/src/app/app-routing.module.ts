import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { F0fPageComponent } from './f0f-page/f0f-page.component';
import { GameCenterPageComponent } from './game-center-page/game-center-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PeoplePageComponent } from './people-page/people-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { TeamPageComponent } from './team-page/team-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
 // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardGuard] },
  { path: 'teams/:id', component: TeamPageComponent, canActivate: [AuthGuardGuard] },
  { path: 'settings', component: SettingsPageComponent, canActivate: [AuthGuardGuard] },
  { path: 'people/:id', component: PeoplePageComponent, canActivate: [AuthGuardGuard] },
  { path: 'games', component: GameCenterPageComponent, canActivate: [AuthGuardGuard] },
  { path: 'games/:id', component: GamePageComponent, canActivate: [AuthGuardGuard] },
  {path: '**', pathMatch: 'full', component: F0fPageComponent, canActivate: [AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
