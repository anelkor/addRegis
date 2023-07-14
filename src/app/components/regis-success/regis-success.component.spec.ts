import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisSuccessComponent } from './regis-success.component';

describe('RegisSuccessComponent', () => {
  let component: RegisSuccessComponent;
  let fixture: ComponentFixture<RegisSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisSuccessComponent]
    });
    fixture = TestBed.createComponent(RegisSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
