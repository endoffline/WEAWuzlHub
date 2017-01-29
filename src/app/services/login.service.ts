import {Injectable} from '@angular/core';
import {Headers, Http} from "@angular/http";
import 'rxjs/Rx';
import {baseUrl} from "../app-const.component";
import {Observable} from "rxjs";
import {Credentials} from "../../interfaces/credentials.interface";


@Injectable()
export class LoginService {
  private loginUrl = `${baseUrl}/admin`;
  //private headers = new Headers({'Accept': 'application/json'});

  constructor(private http: Http) {
  }

  checkLogin(user: string, password: string): Observable<boolean> {
    let credentials = btoa(`${user}:${password}`);
    var headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization', `Basic ${credentials}`);
    //this.headers.append('Authorization', `Basic ${credentials}`);
    console.log(`Basic ${credentials}`);
    return this.http.get(this.loginUrl, {headers: headers})
      .map(response => <boolean>response.json());
  }

  setLogin(user: string, password: string, isLoggedIn: boolean): void {
    if (!this.getLoginStatus()) {
      let credentials = btoa(`${user}:${password}`);
      if (isLoggedIn) {
        localStorage.setItem('Authorization', `Basic ${credentials}`);
      }
      console.log('Login ' + isLoggedIn);
    }
  }

  getLoginStatus(): boolean {
    return localStorage.getItem('Authorization') !== null;
  }

  getCredentials(): string {
    if (this.getLoginStatus()) {
      return localStorage.getItem('Authorization');
    }
    return null;
  }

  getHeaders(): Headers {
    let credentials = this.getCredentials();
    var headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    if (credentials !== null) {
      headers.append('Authorization', credentials);
    }
    return headers;
  }
  logout(): void {
    if (this.getLoginStatus()) {
      localStorage.removeItem('Authorization');
    }
  }
}
