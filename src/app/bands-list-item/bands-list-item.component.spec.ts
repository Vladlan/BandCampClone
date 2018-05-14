import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandsListItemComponent } from './bands-list-item.component';

describe('BandsListItemComponent', () => {
  let component: BandsListItemComponent;
  let fixture: ComponentFixture<BandsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
