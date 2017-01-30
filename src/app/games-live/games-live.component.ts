import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {Game} from "../../models/game";
import {TournamentService} from "../services/tournament.service";
import {Tournament} from "../../models/tournament";
import {Observable} from "rxjs";

@Component({
  moduleId: module.id,
  selector: 'games-live',
  templateUrl: './games-live.component.html'
})

export class GamesLiveComponent implements OnInit {

  tournament: Tournament = new Tournament();

  constructor(private tournamentService: TournamentService) {
  }

  getTournamnetToday(): void {
    this.tournamentService.getTournamentByDate(this.getCurrentDate())
      .subscribe(tournament => this.tournament = tournament,
        error => console.error(error),
        () => console.log(this.tournament));
    Observable.interval(5000)
      .flatMap(() => this.tournamentService.getTournamentByDate(this.getCurrentDate()))
      .subscribe(tournament => {
          this.tournament = tournament;
          console.log(tournament);
        },
        error => console.error(error),
        () => console.log(this.tournament));

  }

  getCurrentDate(): string {
    let today = new Date();
    let dd = today.getDate();

    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    let sdd: string;
    if (dd < 10) {
      sdd = '0' + dd;
    } else {
      sdd = dd.toString();
    }
    let smm: string;
    if (mm < 10) {
      smm = '0' + mm;
    } else {
      smm = mm.toString();
    }
    return sdd + '-' + smm + '-' + yyyy;

  }

  ngOnInit(): void {
    this.getTournamnetToday();
  }

}


