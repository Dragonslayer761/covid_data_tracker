import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ApiCallService } from './api-call.service';

import { CovidDataTrackerService } from './covid-data-tracker.service';

describe('CovidDataTrackerService', () => {
  let service: CovidDataTrackerService;
  let api:ApiCallService;
  let mockApiCall = {
    getCovidTrackerData(url: any) {
      return of({
        "ID": "c0a25bca-2c37-4d51-bafb-60f6f8a2c62c",
        "Message": "",
        "Global": {
          "NewConfirmed": 130361,
          "TotalConfirmed": 527053691,
          "NewDeaths": 384,
          "TotalDeaths": 6282112,
          "NewRecovered": 0,
          "TotalRecovered": 0,
          "Date": "2022-05-29T17:29:18.558Z"
        },
        "Countries": [
          {
            "ID": "6a75c040-75fc-4ff5-b115-c859ac7d3339",
            "Country": "Afghanistan",
            "CountryCode": "AF",
            "Slug": "afghanistan",
            "NewConfirmed": 0,
            "TotalConfirmed": 180122,
            "NewDeaths": 0,
            "TotalDeaths": 7701,
            "NewRecovered": 0,
            "TotalRecovered": 0,
            "Date": "2022-05-29T17:29:18.558Z"
          }],
        "Date": "2022-05-29T17:29:18.558Z"
      })
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{provide:ApiCallService,useValue:mockApiCall}]
    });
    service = TestBed.inject(CovidDataTrackerService);
    api =TestBed.inject(ApiCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call getAllData', () => {
    service.getAllData();
    expect(api.getCovidTrackerData('url').subscribe(data =>{
      expect(service['allCountryData']).toEqual([{
        "ID": "6a75c040-75fc-4ff5-b115-c859ac7d3339",
        "Country": "Afghanistan",
        "CountryCode": "AF",
        "Slug": "afghanistan",
        "NewConfirmed": 0,
        "TotalConfirmed": 180122,
        "NewDeaths": 0,
        "TotalDeaths": 7701,
        "NewRecovered": 0,
        "TotalRecovered": 0,
        "Date": "2022-05-29T17:29:18.558Z"
      }])
    }))
  });
  it('should call refreshPage',()=>{
    spyOn(service.$countryDataEmit,'next')
    service.refreshPage();
    expect(service.$countryDataEmit.next).toHaveBeenCalled()
  })
});
