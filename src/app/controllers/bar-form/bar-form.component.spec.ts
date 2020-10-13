import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarFormComponent } from './bar-form.component';

describe('BarFormComponent', () => {
  let component: BarFormComponent;
  let fixture: ComponentFixture<BarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
