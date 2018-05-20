import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

interface AdminValue {
  value: any;
}

@Injectable()
export class LocalStorage {
  callToActionSubject = new Subject();
  adminThemeSubject = new Subject();
  adminBgSubject = new Subject();

  set adminBg(value: AdminValue) {
    this.adminBgSubject.next(value); // this will make sure to tell every subscriber about the change.
    localStorage.setItem("adminBg", JSON.stringify(value));
  }

  get adminBg() {
    return JSON.parse(localStorage.getItem("adminBg"));
  }

  set adminTheme(value: AdminValue) {
    this.adminThemeSubject.next(value); // this will make sure to tell every subscriber about the change.
    localStorage.setItem("lightTheme", JSON.stringify(value));
  }

  get adminTheme() {
    return JSON.parse(localStorage.getItem("lightTheme"));
  }

  set callToAction(value: boolean) {
    this.callToActionSubject.next(value); // this will make sure to tell every subscriber about the change.
    localStorage.setItem("callToAction", JSON.stringify(value));
  }

  get callToAction() {
    return JSON.parse(localStorage.getItem("callToAction"));
  }
}
