import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckregisComponent } from './checkregis.component';

describe('CheckregisComponent', () => {
  let component: CheckregisComponent;
  let fixture: ComponentFixture<CheckregisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckregisComponent]
    });
    fixture = TestBed.createComponent(CheckregisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
