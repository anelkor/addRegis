import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectformComponent } from './selectform.component';

describe('SelectformComponent', () => {
  let component: SelectformComponent;
  let fixture: ComponentFixture<SelectformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectformComponent]
    });
    fixture = TestBed.createComponent(SelectformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
