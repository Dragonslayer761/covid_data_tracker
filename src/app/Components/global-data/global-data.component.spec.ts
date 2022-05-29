import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalDataComponent } from './global-data.component';

describe('GlobalDataComponent', () => {
  let component: GlobalDataComponent;
  let fixture: ComponentFixture<GlobalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalDataComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalDataComponent);
    component = fixture.componentInstance;
    component.global={
      "NewConfirmed": 130361,
      "TotalConfirmed": 527053691,
      "NewDeaths": 384,
      "TotalDeaths": 6282112,
      "NewRecovered": 0,
      "TotalRecovered": 0,
      "Date": "2022-05-29T17:29:18.558Z"
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
