import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form02Component } from './form02.component';

describe('Form02Component', () => {
  let component: Form02Component;
  let fixture: ComponentFixture<Form02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Form02Component]
    });
    fixture = TestBed.createComponent(Form02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
