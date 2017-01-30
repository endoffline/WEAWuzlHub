import {BrowserModule}          from '@angular/platform-browser';
import {NgModule}               from '@angular/core';
import {FormsModule}            from '@angular/forms';
import {ReactiveFormsModule}    from '@angular/forms'
import {HttpModule}             from '@angular/http';
import {AppRoutingModule}       from './app-routing.module';
import {ChartsModule}           from 'ng2-charts';

import {AppComponent}           from './app.component';
import {PlayerListComponent}    from './player-list/player-list.component';
import {PlayerDetailComponent}  from './player-detail/player-detail.component';
import {PlayerService}          from "./services/player.service";
import {RankingService}         from "./services/ranking.service";
import {RankingListComponent}   from "./ranking-list/ranking-list.component";
import {LoginService} from "./services/login.service";
import {CommonModule} from "@angular/common";
import {PlayerNewComponent} from "./player-new/player-new.component";
import {TournamentService} from "./services/tournament.service";
import {GameService} from "./services/game.service";
import {GamesLiveComponent} from "./games-live/games-live.component";
import {GamesDetailComponent} from "./game-detail/game-detail.component";


@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerDetailComponent,
    PlayerNewComponent,
    RankingListComponent,
    GamesLiveComponent,
    GamesDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    ChartsModule,
    CommonModule
  ],
  providers: [
    PlayerService,
    RankingService,
    LoginService,
    TournamentService,
    GameService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
