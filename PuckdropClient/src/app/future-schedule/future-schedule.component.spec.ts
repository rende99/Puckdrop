import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureScheduleComponent } from './future-schedule.component';

describe('FutureScheduleComponent', () => {
  let component: FutureScheduleComponent;
  let fixture: ComponentFixture<FutureScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
