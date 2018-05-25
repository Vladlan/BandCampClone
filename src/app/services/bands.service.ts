import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { shareReplay, map, refCount } from 'rxjs/operators';
import { Band } from 'app/models';
@Injectable()
export class BandsService {
  private bands: Observable<Array<Band>>;
  constructor(private apiService: ApiService) {}

  getAll(): Observable<Array<Band>> {
    console.log(this.bands);
    return !!this.bands
      ? this.bands
      : (this.bands = this.apiService
          .get('/')
          .pipe(map(data => data.bands))
          .pipe(shareReplay(1)));
  }

  getBandById(id: number): Observable<Array<Band>> {
    return this.apiService.get('/').pipe(map(data => data.bands));
  }
}
