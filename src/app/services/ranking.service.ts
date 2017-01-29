import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

import {Player} from "../../models/player";
import {baseUrl} from "../app-const.component";
import {RatingHistory} from "../../models/ratinghistory";
import {Observable} from "rxjs";
import {ObservableInput} from "rxjs/Observable";


@Injectable()
export class RankingService {
  private rankingUrl = `${baseUrl}/ranking`;  // URL to web api
  private ratingUrl = `${baseUrl}/rating`;  // URL to web api
  private headers = new Headers({'Accept': 'application/json'});

  constructor(private http: Http) { }

  /*getRanking(): Promise<Player[]> {
    return this.http.get(this.rankingUrl, {headers: this.headers})
      .toPromise()
      .then(response => <Player[]>response.json())
      .catch(this.handleError);
  }*/

  getRanking(): Observable<Player[]> {
    return this.http.get(this.rankingUrl, {headers: this.headers})
      .map(response => <Player[]>response.json());
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getRatingHistoryForPlayer(id: number) : Observable<RatingHistory[]> {
    const ratingUrl = `${this.ratingUrl}/${id}`;
    return this.http.get(ratingUrl, {headers: this.headers})
      .map(response => <RatingHistory[]>response.json());
  }

}
