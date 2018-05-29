import { Component, OnInit, COMPILER_OPTIONS } from '@angular/core';
import { LocalStorageService } from 'app/services';
import { FormControl, FormGroup } from '@angular/forms';

interface AdminValue {
  key: string;
  value: any;
}

@Component({
  selector: 'app-admin-bar',
  templateUrl: './admin-bar.component.html',
  styleUrls: ['./admin-bar.component.css']
})
export class AdminBarComponent implements OnInit {
  open: boolean;

  callToAction: boolean;

  adminBg: AdminValue;
  adminTheme: AdminValue;

  adminBgColors: Array<AdminValue> = [
    { value: 'Default', key: '#9dc3ce' },
    { value: 'Red', key: 'red' },
    { value: 'Green', key: 'green' }
  ];

  adminThemes: Array<AdminValue> = [
    { value: 'Light', key: 'white' },
    { value: 'Black', key: 'black' }
  ];

  constructor(protected localStorage: LocalStorageService) {}

  ngOnInit() {
    this.localStorage
      .getItem('adminBg', this.adminBgColors[0])
      .subscribe(data => (this.adminBg = data));
    this.localStorage
      .getItem('adminTheme', this.adminThemes[0])
      .subscribe(data => (this.adminTheme = data));
    this.localStorage
      .getItem('callToAction', true)
      .subscribe(data => (this.callToAction = data));
  }

  setAdminBg = (key: string): void => {
    const adminBg = this.adminBgColors.find(color => color.key === key);
    this.localStorage
      .setItem('adminBg', adminBg)
      .subscribe(() => (this.adminBg = adminBg));
  };

  setAdminTheme = (key: string): void => {
    const adminTheme = this.adminThemes.find(color => color.key === key);
    this.localStorage
      .setItem('adminTheme', adminTheme)
      .subscribe(() => (this.adminTheme = adminTheme));
  };

  toogleCallToAction = (key: string): void => {
    this.localStorage
      .setItem('callToAction', !!key)
      .subscribe(() => (this.callToAction = !!key));
  };

  toogleSide = () => (this.open = !this.open);
}
