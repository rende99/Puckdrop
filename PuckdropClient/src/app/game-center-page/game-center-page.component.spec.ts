import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCenterPageComponent } from './game-center-page.component';

describe('GameCenterPageComponent', () => {
  let component: GameCenterPageComponent;
  let fixture: ComponentFixture<GameCenterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameCenterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCenterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
