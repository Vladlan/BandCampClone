import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import cloneDeep from 'lodash/cloneDeep';


@Injectable()
export class BandsService {
  constructor(private http: HttpClient) {}

  bands = [];

  // main REST methods
  getBands(): Observable<any> {
    const url = 'http://localhost:3000/bands';
    return this.http.get<Observable<any>>(url);
  }

  assignBandsToService() {

    const ourBandsObservable = Observable.create((observer) =>  {
      this.getBands()
        .subscribe((bands: any) => {
            this.bands = cloneDeep(bands);
            observer.next(this.bands);
          },
          (err) => {
            console.log('error: ', err);
          },
          () => {
            return this.bands;
          }
        );
    });

    return ourBandsObservable;
  }
}
