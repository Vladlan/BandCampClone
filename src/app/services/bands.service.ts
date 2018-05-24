import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators/map';
import { Band } from 'app/models';
@Injectable()
export class BandsService {
  private bands: Observable<Array<Band>>;
  constructor(private apiService: ApiService) {}

  getAll(): Observable<Array<Band>> {
    return !this.bands
      ? (this.bands = this.apiService.get('/').pipe(map(data => data.bands)))
      : this.bands;
  }

  getBandById(id: number): Observable<Array<Band>> {
    return this.apiService.get('/').pipe(map(data => data.bands));
  }
}
