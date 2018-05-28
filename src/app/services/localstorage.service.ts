import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { subscribeOn } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable()
export class LocalStorageService {
  public storageStream = {};

  public constructor(protected localStorage: LocalStorage) {}

  public setItem(key: string, value: any): BehaviorSubject<any> {
    localStorage.setItem(key, JSON.stringify(value));

    if (!this.storageStream.hasOwnProperty(key)) {
      this.storageStream[key] = new BehaviorSubject(value);
    }

    this.storageStream[key].next(value);
    return this.storageStream[key];
  }

  public getItem(key: string): BehaviorSubject<any> {
    const value = JSON.parse(localStorage.getItem(key));
    return value !== null ? this.setItem(key, value) : null;
  }
}
