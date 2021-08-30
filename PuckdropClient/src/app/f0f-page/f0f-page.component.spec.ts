import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F0fPageComponent } from './f0f-page.component';

describe('F0fPageComponent', () => {
  let component: F0fPageComponent;
  let fixture: ComponentFixture<F0fPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F0fPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F0fPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
