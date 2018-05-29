import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { shareReplay, map, first, filter, flatMap } from 'rxjs/operators';
import { Band } from 'app/models';
@Injectable()
export class BandsService {
  private bands: Observable<Array<Band>>;
  constructor(private apiService: ApiService) {}
  /**
   * Get all bands
   * @returns Observable
   */
  getAll(): Observable<Array<Band>> {
    return !!this.bands
      ? this.bands
      : (this.bands = this.apiService
          .get('/')
          .pipe(map(data => data.bands), shareReplay(1)));
  }
  /**
   * Get band by id
   * @param  {number} id
   * @returns Observable
   */
  getBandById(id: number): Observable<Band> {
    return this.getAll().pipe(
      flatMap(bands => bands),
      first(band => +band.id === id)
    );
  }
  /**
   * Get band by name
   * @param  {string} name
   * @returns Observable
   */
  getBandByName(name: string): Observable<Band> {
    return this.getAll().pipe(
      flatMap(bands => bands),
      first(band => band.title.toLowerCase() === name)
    );
  }
}
