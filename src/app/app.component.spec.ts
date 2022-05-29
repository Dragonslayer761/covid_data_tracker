import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { CovidDataTrackerService } from './services/covid-data-tracker.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let fixture : ComponentFixture<AppComponent>;
  let app:AppComponent;
  let covidService:CovidDataTrackerService;
  let mockCovidService ={
    $countryDataEmit : of([
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
      refreshPage(){
        
      },
      getAllData(){

      }
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[FormsModule,HttpClientTestingModule],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });
  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    covidService = TestBed.inject(CovidDataTrackerService) as jasmine.SpyObj<CovidDataTrackerService>;
  })

  it('should create the app', () => {
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });

  it(`should have as title 'covidDataTracker'`, () => {
    expect(app.title).toEqual('covidDataTracker');
  });
  it('should call refreshData',()=>{
    spyOn(covidService,'refreshPage').and.callThrough();
    app.refreshData();
    expect(covidService.refreshPage).toHaveBeenCalledTimes(1);
  })

});
