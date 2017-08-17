import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordDemoComponent } from './password-demo.component';

describe('PasswordDemoComponent', () => {
  let component: PasswordDemoComponent;
  let fixture: ComponentFixture<PasswordDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
