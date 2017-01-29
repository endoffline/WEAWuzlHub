import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

import {Player} from "../../models/player";
import {baseUrl} from "../app-const.component";
import {PLAYERS} from "../mock-players";



@Injectable()
export class PlayerService {
  private playersUrl = `${baseUrl}/player`;  // URL to web api
  private headers = new Headers({'Accept': 'application/json'});

  constructor(private http: Http) { }

  getPlayers(): Promise<Player[]> {
    return this.http.get(this.playersUrl, {headers: this.headers})
      .toPromise()
      .then(response => <Player[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


  //getPlayers(): Promise<Player[]> {
  //  return Promise.resolve(PLAYERS);
  //}

  //getHero(id: number): Promise<Hero> {
  //  return this.getHeroes()
  //    .then(heroes => heroes.find(hero => hero.id === id));
  //}

  getPlayer(id: number): Promise<Player> {
    const playerUrl = `${this.playersUrl}/${id}`;
    return this.http.get(playerUrl)
      .toPromise()
      .then(response => <Player>response.json())
      .catch(this.handleError);
  }

}


