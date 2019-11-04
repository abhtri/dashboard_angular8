import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherformComponent } from './weatherform.component';

describe('WeatherformComponent', () => {
  let component: WeatherformComponent;
  let fixture: ComponentFixture<WeatherformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
