import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { F0fPageComponent } from './f0f-page/f0f-page.component';
import { GameCenterPageComponent } from './game-center-page/game-center-page.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PeoplePageComponent } from './people-page/people-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { TeamPageComponent } from './team-page/team-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'teams/:id', component: TeamPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'settings', component: SettingsPageComponent },
  { path: 'people/:id', component: PeoplePageComponent },
  { path: 'games', component: GameCenterPageComponent },
  {path: '**', pathMatch: 'full', component: F0fPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
