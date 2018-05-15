import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create header component', () => {
    expect(component).toBeTruthy();
  });
  // it('first li element in nav ul should contain link to user\'s profile when user is logined', () => {
  //   component.isLogIned = true;
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   const firstLI = compiled.querySelector('nav ul').firstElementChild;
  //   expect(firstLI.firstElementChild.tagName).toEqual('A');
  // });
  // it('first li element in nav ul should contain div with login buttons via social media when user is logined', () => {
  //   component.isLogIned = false;
  //   const compiled = fixture.debugElement.nativeElement;
  //   const firstLI = compiled.querySelector('nav ul').firstElementChild;
  //   expect(firstLI.firstElementChild.tagName).toEqual('DIV');
  //   expect(firstLI.textContent).toContain('SignIn via:');
  // });
});
