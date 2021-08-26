import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { LeagueStandingsTableComponent } from './league-standings-table/league-standings-table.component';
import { StandingsService } from './standings.service';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ChatBubbleComponent } from './chat-bubble/chat-bubble.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { FutureScheduleComponent } from './future-schedule/future-schedule.component';
import { ScheduleCardComponent } from './schedule-card/schedule-card.component';
import { FooterComponent } from './footer/footer.component';
import { RosterComponent } from './roster/roster.component';
import { PeoplePageComponent } from './people-page/people-page.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TeamPageComponent,
    LeagueStandingsTableComponent,
    ChatBoxComponent,
    ChatBubbleComponent,
    LoginPageComponent,
    SettingsPageComponent,
    FutureScheduleComponent,
    ScheduleCardComponent,
    FooterComponent,
    RosterComponent,
    PeoplePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    StandingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }