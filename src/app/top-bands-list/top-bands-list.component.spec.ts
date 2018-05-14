import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBandsListComponent } from './top-bands-list.component';

describe('TopBandsListComponent', () => {
  let component: TopBandsListComponent;
  let fixture: ComponentFixture<TopBandsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBandsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBandsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
