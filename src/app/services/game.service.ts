import {Injectable} from '@angular/core';
import {Headers, Http} from "@angular/http";
import 'rxjs/Rx';
import {baseUrl} from "../app-const.component";
import {Observable} from "rxjs";
import {Credentials} from "../../interfaces/credentials.interface";


@Injectable()
export class GameService {
  private gameUrl = `${baseUrl}/game`;

  constructor(private http: Http) {
  }


}
