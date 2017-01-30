import {Injectable} from '@angular/core';
import {Headers, Http} from "@angular/http";
import 'rxjs/Rx';
import {baseUrl} from "../app-const.component";
import {Observable} from "rxjs";
import {Credentials} from "../../interfaces/credentials.interface";
import {Game} from "../../models/game";
import {LoginService} from "./login.service";


@Injectable()
export class GameService {
  private gamesUrl = `${baseUrl}/game`;

  constructor(private http: Http,
              private loginService: LoginService) {
  }

  getGame(id: number): Observable<Game> {
    const gameUrl = `${this.gamesUrl}/${id}`;
    let headers = this.loginService.getHeaders();
    return this.http.get(gameUrl, {headers: headers})
      .map(response => <Game>response.json());
  }

  updateGame(game: Game): Observable<boolean> {
    let headers = this.loginService.getHeaders();
    return this.http.put(this.gamesUrl, JSON.stringify(game), {headers: headers})
      .map(response => <boolean>response.json());
  }

}
