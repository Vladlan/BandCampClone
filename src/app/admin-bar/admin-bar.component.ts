import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/localstorage.service/localstorage.service';
import { FormControl, FormGroup } from '@angular/forms';

interface AdminValue {
  value: any;
}

@Component({
  selector: 'app-admin-bar',
  templateUrl: './admin-bar.component.html',
  styleUrls: ['./admin-bar.component.css']
})
export class AdminBarComponent implements OnInit {
  open: boolean;
  callToAction: AdminValue;
  adminBg: AdminValue;
  lightTheme: AdminValue;

  formAdminBg: FormGroup;
  formCallToAction: FormGroup;
  formAdminTheme: FormGroup;

  adminBgData = [
    {
      content: 'Default',
      value: '#9dc3ce',
      id: 'crust1'
    },
    {
      content: 'Red',
      value: 'red',
      id: 'crust2'
    },
    {
      content: 'Green',
      value: 'green',
      id: 'crust3'
    }
  ];

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    if ( this.localStorageService.adminBg === null ) {
      this.adminBg = {value: '#9dc3ce'};
    } else {
      this.adminBg = this.localStorageService.adminBg;
    }

    if ( this.localStorageService.adminTheme === null ) {
      this.lightTheme = {value: false};
    } else {
      this.lightTheme = this.localStorageService.adminTheme;
    }

    if ( this.localStorageService.callToAction === null ) {
      this.callToAction = {value: false};
    } else {
      this.callToAction = this.localStorageService.callToAction;
    }


    this.formAdminBg = new FormGroup({
      adminBg: new FormControl(this.adminBg.value)
    });
    this.formAdminBg.valueChanges.subscribe(term => {
      this.adminBg.value = term.adminBg;
      this.localStorageService.adminBg = this.adminBg;
    });


    this.formCallToAction = new FormGroup({
      callToAction: new FormControl(this.callToAction.value)
    });
    this.formCallToAction.valueChanges.subscribe(term => {
      this.callToAction = term.callToAction;
      this.localStorageService.callToAction = this.callToAction;
    });


    this.formAdminTheme = new FormGroup({
      adminTheme: new FormControl(this.lightTheme.value)
    });

    this.formAdminTheme.valueChanges.subscribe(term => {
      this.lightTheme.value = term.adminTheme;
      this.localStorageService.adminTheme = this.lightTheme;
    });
  }

  toogleSide() {
    this.open = !this.open;
  }
}
