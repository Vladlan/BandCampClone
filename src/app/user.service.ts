import { Injectable } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;

  auth0 = new auth0.WebAuth({
    clientID: '9uCmqI69wdoq3HERRj5KsD8jDctBm9c3',
    domain: 'bandcampclone.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'https://bandcampclone.eu.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200',
    scope: 'openid profile',
    connection: 'google-oauth2'
  });

  constructor(public router: Router) { }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/']);
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {

    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    const userAuthInfo = {
      accessToken: authResult.accessToken,
      idToken: authResult.idToken,
      expiresAt
    }
    this.user = new User(userAuthInfo, authResult.id_token.name);
    localStorage.setItem('band_camp_clone_userinfo', JSON.stringify(this.user));

  }

  public isAuthenticated(): boolean {

    const expiresAt = JSON.parse(localStorage.getItem('band_camp_clone_userinfo')).authInfo.expiresAt;
    return new Date().getTime() < expiresAt;
  }
}
