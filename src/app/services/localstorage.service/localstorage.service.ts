import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

interface AdminValue {
  value: boolean;
}

@Injectable()
export class LocalStorage {
  callToActionSubject = new Subject();
  adminThemeSubject = new Subject();
  adminBgSubject = new Subject();

  set adminBg(value: AdminValue) {
    // debugger;
    localStorage.setItem('adminBg', JSON.stringify({value: value.value} ) );
    this.adminBgSubject.next(value.value); // this will make sure to tell every subscriber about the change.
  }

  get adminBg() {
    return JSON.parse(localStorage.getItem('adminBg'));
  }

  set adminTheme(theme: AdminValue) {
    // debugger;
    localStorage.setItem('lightTheme', JSON.stringify({value: theme.value}));
    this.adminThemeSubject.next(theme.value); // this will make sure to tell every subscriber about the change.
  }

  get adminTheme() {
    // debugger;
    return JSON.parse(localStorage.getItem('lightTheme'));
  }

  set callToAction(value: AdminValue) {
    localStorage.setItem('callToAction', JSON.stringify({value: value}));
    this.callToActionSubject.next(value); // this will make sure to tell every subscriber about the change.
  }

  get callToAction() {
    return JSON.parse(localStorage.getItem('callToAction'));
  }

}
