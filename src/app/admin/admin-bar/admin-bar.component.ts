import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'app/services/localstorage.service';
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

  constructor(private globalService: LocalStorageService) {}

  ngOnInit() {
    this.globalService.adminBg === null
      ? (this.adminBg = { value: '#9dc3ce' })
      : (this.adminBg = this.globalService.adminBg);
    this.globalService.adminTheme === null
      ? (this.lightTheme = { value: false })
      : (this.lightTheme = this.globalService.adminTheme);
    this.globalService.callToAction === null
      ? (this.callToAction = { value: false })
      : (this.callToAction = this.globalService.callToAction);

    this.formAdminBg = new FormGroup({
      adminBg: new FormControl(this.adminBg.value)
    });
    this.formAdminBg.valueChanges.subscribe(term => {
      this.adminBg.value = term.adminBg;
      this.globalService.adminBg = this.adminBg;
    });

    this.formCallToAction = new FormGroup({
      callToAction: new FormControl(this.callToAction.value)
    });
    this.formCallToAction.valueChanges.subscribe(term => {
      this.callToAction = term.callToAction;
      this.globalService.callToAction = this.callToAction;
    });

    this.formAdminTheme = new FormGroup({
      adminTheme: new FormControl(this.lightTheme.value)
    });

    this.formAdminTheme.valueChanges.subscribe(term => {
      this.lightTheme.value = term.adminTheme;
      this.globalService.adminTheme = this.lightTheme;
    });
  }

  toogleSide() {
    this.open = !this.open;
  }
}
