import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/localstorage.service/localstorage.service';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.css']
})
export class CallToActionComponent implements OnInit {
  show: boolean;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.localStorageService.callToActionSubject.subscribe(
      item => {
        return this.show = !!item;
      }
    );

    this.localStorageService.callToAction === null ?
      this.show = false :
      this.show = this.localStorageService.callToAction.value;
  }
}
