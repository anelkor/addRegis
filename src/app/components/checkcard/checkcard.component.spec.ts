import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckcardComponent } from './checkcard.component';

describe('CheckcardComponent', () => {
  let component: CheckcardComponent;
  let fixture: ComponentFixture<CheckcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckcardComponent]
    });
    fixture = TestBed.createComponent(CheckcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
