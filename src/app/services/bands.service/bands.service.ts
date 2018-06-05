import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators/tap';
import cloneDeep from 'lodash/cloneDeep';
import {environment} from '../../../environments/environment';


@Injectable()
export class BandsService {
  constructor(private http: HttpClient) {}

  bands = [];

  getBands(): Observable<any> {
    return this.http.get<Observable<any>>(environment.databaseUrl + '/bands')
      .pipe( tap(data => this.bands = cloneDeep(data)) );
  }

}
