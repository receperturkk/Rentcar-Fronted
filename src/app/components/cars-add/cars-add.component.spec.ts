import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsAddComponent } from './cars-add.component';

describe('CarsAddComponent', () => {
  let component: CarsAddComponent;
  let fixture: ComponentFixture<CarsAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarsAddComponent]
    });
    fixture = TestBed.createComponent(CarsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
