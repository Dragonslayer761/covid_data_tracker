import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { CovidDataTrackerService } from 'src/app/services/covid-data-tracker.service';

import { DataPreviewComponent } from './data-preview.component';

describe('DataPreviewComponent', () => {
  let component: DataPreviewComponent;
  let fixture: ComponentFixture<DataPreviewComponent>;
  let covidService:CovidDataTrackerService;
  const mockCovidService = {
    $countryDataEmit: of([
      {
        "ID": "54934645-57da-4778-b46a-4c2352753582",
        "Country": "Afghanistan",
        "CountryCode": "AF",
        "Slug": "afghanistan",
        "NewConfirmed": 0,
        "TotalConfirmed": 180122,
        "NewDeaths": 0,
        "TotalDeaths": 7701,
        "NewRecovered": 0,
        "TotalRecovered": 0,
        "Date": "2022-05-29T15:07:32.213Z",
        "Premium": {}
      },
      {
        "ID": "4a1550be-59c6-4590-aff4-173f5791ad83",
        "Country": "Albania",
        "CountryCode": "AL",
        "Slug": "albania",
        "NewConfirmed": 0,
        "TotalConfirmed": 276081,
        "NewDeaths": 0,
        "TotalDeaths": 3497,
        "NewRecovered": 0,
        "TotalRecovered": 0,
        "Date": "2022-05-29T15:07:32.213Z",
        "Premium": {}
      }]),
      $globalDataEmit:of( {
        "NewConfirmed": 130361,
        "TotalConfirmed": 527053691,
        "NewDeaths": 384,
        "TotalDeaths": 6282112,
        "NewRecovered": 0,
        "TotalRecovered": 0,
        "Date": "2022-05-29T17:29:18.558Z"
      }),
      $callTimeStampEmit:of("2022-05-29T17:29:18.558Z")
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPreviewComponent ],
      imports:[FormsModule,HttpClientTestingModule],
      providers:[{ provide: CovidDataTrackerService, useValue: mockCovidService }],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPreviewComponent);
    component = fixture.componentInstance;
    covidService = TestBed.inject(CovidDataTrackerService) as jasmine.SpyObj<CovidDataTrackerService>;
    fixture.detectChanges();
  });
  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    fixture.detectChanges()
    expect(component).toBeTruthy();
  });
  it('should call getSearchResults',()=>{
    let event = "af"
    component.getSearchResult(event);
    expect(component.filterCountryData[0].Country).toBe('Afghanistan')
  })
});
