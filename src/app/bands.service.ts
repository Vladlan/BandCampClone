import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class BandsService {
  constructor(private http: HttpClient) {}

  bands = [];

  // main REST methods
  getBands(url = 'http://localhost:3000/bands'): Observable<any> {
    return this.http.get<Observable<any>>(url);
  }

  assignBandsToService() {

    const ourBandsObservable = Observable.create((observer) =>  {
      this.getBands()
        .subscribe((bands: any) => {
            for (let i = 0; i < bands.length; i++) {
              this.bands.push(Object.assign({}, bands[i]));
            }
            observer.next(this.bands);
          },
          (err) => {
            console.log('error: ', err);
          },
          () => {
            console.log('completed');
            return this.bands;
          }
        );
    });

    return ourBandsObservable;
  }

  consoleLogFromBandsService() {
    console.log(this.bands);
  }

}
