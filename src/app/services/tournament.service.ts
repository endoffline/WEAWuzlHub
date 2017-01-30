import {Injectable} from '@angular/core';
import {Headers, Http} from "@angular/http";
import 'rxjs/Rx';
import {baseUrl} from "../app-const.component";
import {Observable} from "rxjs";
import {Credentials} from "../../interfaces/credentials.interface";
import {Tournament} from "../../models/tournament";
import {LoginService} from "./login.service";


@Injectable()
export class TournamentService {
  private tournamentUrl = `${baseUrl}/tournament/date/`;

  constructor(private http: Http,
              private loginService: LoginService) {
  }

  getTournamentByDate(date: string) : Observable<Tournament> {
    const tbdUrl = `${this.tournamentUrl}/${date}`;
    let headers = this.loginService.getHeaders();
    return this.http.get(tbdUrl, {headers: headers})
      .map(response => <Tournament>response.json());
  }
}
