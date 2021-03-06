import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColumnName, sortOrder } from 'src/app/enums/covid.enum';

import { CountryDataComponent } from './country-data.component';

describe('CountryDataComponent', () => {
  let component: CountryDataComponent;
  let fixture: ComponentFixture<CountryDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryDataComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDataComponent);
    component = fixture.componentInstance;
    component.countryData=[ {
      "ID": "54934645-57da-4778-b46a-4c2352753582",
      "Country": "Afghanistan",
      "CountryCode": "AF",
      "Slug": "afghanistan",
      "NewConfirmed": 10,
      "TotalConfirmed": 180122,
      "NewDeaths": 20,
      "TotalDeaths": 7701,
      "NewRecovered": 2,
      "TotalRecovered": 300,
      "Date": "2022-05-29T15:07:32.213Z"
    },
    {
      "ID": "4a1550be-59c6-4590-aff4-173f5791ad83",
      "Country": "Albania",
      "CountryCode": "AL",
      "Slug": "albania",
      "NewConfirmed": 21,
      "TotalConfirmed": 276081,
      "NewDeaths": 10,
      "TotalDeaths": 3497,
      "NewRecovered": 1,
      "TotalRecovered": 4,
      "Date": "2022-05-29T15:07:32.213Z"
    }]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call ngOninit : if country data greater than limit',()=>{
    component.limit=4;
    component.countryData=[
      {
        "ID": "54934645-57da-4778-b46a-4c2352753582",
        "Country": "Afghanistan",
        "CountryCode": "AF",
        "Slug": "afghanistan",
        "NewConfirmed": 10,
        "TotalConfirmed": 180122,
        "NewDeaths": 20,
        "TotalDeaths": 7701,
        "NewRecovered": 2,
        "TotalRecovered": 300,
        "Date": "2022-05-29T15:07:32.213Z"
      },
      {
        "ID": "4a1550be-59c6-4590-aff4-173f5791ad83",
        "Country": "Albania",
        "CountryCode": "AL",
        "Slug": "albania",
        "NewConfirmed": 21,
        "TotalConfirmed": 276081,
        "NewDeaths": 10,
        "TotalDeaths": 3497,
        "NewRecovered": 1,
        "TotalRecovered": 4,
        "Date": "2022-05-29T15:07:32.213Z"
      },
      {
        "ID": "043a298b-2b34-4b1c-a8cc-e7b3797874d2",
        "Country": "Algeria",
        "CountryCode": "DZ",
        "Slug": "algeria",
        "NewConfirmed": 0,
        "TotalConfirmed": 265884,
        "NewDeaths": 0,
        "TotalDeaths": 6875,
        "NewRecovered": 0,
        "TotalRecovered": 0,
        "Date": "2022-06-01T18:10:07.318Z",
      },
      {
        "ID": "4342741b-9229-4c84-8230-747d1d730f68",
        "Country": "Andorra",
        "CountryCode": "AD",
        "Slug": "andorra",
        "NewConfirmed": 0,
        "TotalConfirmed": 42894,
        "NewDeaths": 0,
        "TotalDeaths": 153,
        "NewRecovered": 0,
        "TotalRecovered": 0,
        "Date": "2022-06-01T18:10:07.318Z",
      },
      {
        "ID": "1f95d21c-84c9-4f7c-aad3-4bb31e978a43",
        "Country": "Angola",
        "CountryCode": "AO",
        "Slug": "angola",
        "NewConfirmed": 0,
        "TotalConfirmed": 99761,
        "NewDeaths": 0,
        "TotalDeaths": 1900,
        "NewRecovered": 0,
        "TotalRecovered": 0,
        "Date": "2022-06-01T18:10:07.318Z",
      }
    ];
    fixture.detectChanges();
    component.ngOnInit();
    expect(component.tenData.length).toBe(4);
  })
  it('should test ngOnChanges',()=>{
    component.ngOnChanges();
    expect(component.totalPage).toBe(1)
  });
  it('should test ngOnChanges:if country data greater than limit ',()=>{
    component.countryData=[
      {
        "ID": "54934645-57da-4778-b46a-4c2352753582",
        "Country": "Afghanistan",
        "CountryCode": "AF",
        "Slug": "afghanistan",
        "NewConfirmed": 10,
        "TotalConfirmed": 180122,
        "NewDeaths": 20,
        "TotalDeaths": 7701,
        "NewRecovered": 2,
        "TotalRecovered": 300,
        "Date": "2022-05-29T15:07:32.213Z"
      },
      {
        "ID": "4a1550be-59c6-4590-aff4-173f5791ad83",
        "Country": "Albania",
        "CountryCode": "AL",
        "Slug": "albania",
        "NewConfirmed": 21,
        "TotalConfirmed": 276081,
        "NewDeaths": 10,
        "TotalDeaths": 3497,
        "NewRecovered": 1,
        "TotalRecovered": 4,
        "Date": "2022-05-29T15:07:32.213Z"
      },
      {
        "ID": "043a298b-2b34-4b1c-a8cc-e7b3797874d2",
        "Country": "Algeria",
        "CountryCode": "DZ",
        "Slug": "algeria",
        "NewConfirmed": 0,
        "TotalConfirmed": 265884,
        "NewDeaths": 0,
        "TotalDeaths": 6875,
        "NewRecovered": 0,
        "TotalRecovered": 0,
        "Date": "2022-06-01T18:10:07.318Z",
      },
      {
        "ID": "4342741b-9229-4c84-8230-747d1d730f68",
        "Country": "Andorra",
        "CountryCode": "AD",
        "Slug": "andorra",
        "NewConfirmed": 0,
        "TotalConfirmed": 42894,
        "NewDeaths": 0,
        "TotalDeaths": 153,
        "NewRecovered": 0,
        "TotalRecovered": 0,
        "Date": "2022-06-01T18:10:07.318Z",
      },
      {
        "ID": "1f95d21c-84c9-4f7c-aad3-4bb31e978a43",
        "Country": "Angola",
        "CountryCode": "AO",
        "Slug": "angola",
        "NewConfirmed": 0,
        "TotalConfirmed": 99761,
        "NewDeaths": 0,
        "TotalDeaths": 1900,
        "NewRecovered": 0,
        "TotalRecovered": 0,
        "Date": "2022-06-01T18:10:07.318Z",
      }
    ];
    component.limit=4;
    component.ngOnChanges();
    expect(component.tenData.length).toBe(4);
  });
  it('should call getPageData:if country data greater than limit',()=>{
    let event = 1;
    component.countryData=[
      {
        "ID": "54934645-57da-4778-b46a-4c2352753582",
        "Country": "Afghanistan",
        "CountryCode": "AF",
        "Slug": "afghanistan",
        "NewConfirmed": 10,
        "TotalConfirmed": 180122,
        "NewDeaths": 20,
        "TotalDeaths": 7701,
        "NewRecovered": 2,
        "TotalRecovered": 300,
        "Date": "2022-05-29T15:07:32.213Z"
      },
      {
        "ID": "4a1550be-59c6-4590-aff4-173f5791ad83",
        "Country": "Albania",
        "CountryCode": "AL",
        "Slug": "albania",
        "NewConfirmed": 21,
        "TotalConfirmed": 276081,
        "NewDeaths": 10,
        "TotalDeaths": 3497,
        "NewRecovered": 1,
        "TotalRecovered": 4,
        "Date": "2022-05-29T15:07:32.213Z"
      },
      {
        "ID": "043a298b-2b34-4b1c-a8cc-e7b3797874d2",
        "Country": "Algeria",
        "CountryCode": "DZ",
        "Slug": "algeria",
        "NewConfirmed": 0,
        "TotalConfirmed": 265884,
        "NewDeaths": 0,
        "TotalDeaths": 6875,
        "NewRecovered": 0,
        "TotalRecovered": 0,
        "Date": "2022-06-01T18:10:07.318Z",
      },
      {
        "ID": "4342741b-9229-4c84-8230-747d1d730f68",
        "Country": "Andorra",
        "CountryCode": "AD",
        "Slug": "andorra",
        "NewConfirmed": 0,
        "TotalConfirmed": 42894,
        "NewDeaths": 0,
        "TotalDeaths": 153,
        "NewRecovered": 0,
        "TotalRecovered": 0,
        "Date": "2022-06-01T18:10:07.318Z",
      },
      {
        "ID": "1f95d21c-84c9-4f7c-aad3-4bb31e978a43",
        "Country": "Angola",
        "CountryCode": "AO",
        "Slug": "angola",
        "NewConfirmed": 0,
        "TotalConfirmed": 99761,
        "NewDeaths": 0,
        "TotalDeaths": 1900,
        "NewRecovered": 0,
        "TotalRecovered": 0,
        "Date": "2022-06-01T18:10:07.318Z",
      }
    ];
    component.limit=4;
    component.getPageData(event);
    expect(component.tenData.length).toBe(4)
  });
  it('should call getPageData:',()=>{
    let event = 1;
    component.getPageData(event);
    expect(component.startIndex).toBe(0)
  });
  it('should call sortCol country descending',()=>{
    let col = ColumnName.country;
    component.sortType = sortOrder.asc;
    spyOn(component,'getPageData').and.callThrough();
    component.sortCol(col);
    expect(component.countryData[0].Country).toEqual('Albania');
  });
  it('should call sortCol country descending',()=>{
    let col = ColumnName.country;
    component.sortType = sortOrder.asc;
    component.countryData=[ 
    {
      "ID": "4a1550be-59c6-4590-aff4-173f5791ad83",
      "Country": "Albania",
      "CountryCode": "AL",
      "Slug": "albania",
      "NewConfirmed": 21,
      "TotalConfirmed": 276081,
      "NewDeaths": 10,
      "TotalDeaths": 3497,
      "NewRecovered": 1,
      "TotalRecovered": 4,
      "Date": "2022-05-29T15:07:32.213Z"
    },
    {
      "ID": "54934645-57da-4778-b46a-4c2352753582",
      "Country": "Afghanistan",
      "CountryCode": "AF",
      "Slug": "afghanistan",
      "NewConfirmed": 10,
      "TotalConfirmed": 180122,
      "NewDeaths": 20,
      "TotalDeaths": 7701,
      "NewRecovered": 2,
      "TotalRecovered": 300,
      "Date": "2022-05-29T15:07:32.213Z"
    }]
    spyOn(component,'getPageData').and.callThrough();
    component.sortCol(col);
    expect(component.countryData[0].Country).toEqual('Albania');
  });
  
  it('should call sortCol newConfirmed descending',()=>{
    let col = ColumnName.newConfirmed;
    component.sortType = sortOrder.asc;
    spyOn(component,'getPageData').and.callThrough();
    component.sortCol(col);
    expect(component.countryData[0].NewConfirmed).toEqual(21);
  });
  it('should call sortCol newRecovered descending',()=>{
    let col = ColumnName.newRecovered;
    component.sortType = sortOrder.asc;
    spyOn(component,'getPageData').and.callThrough();
    component.sortCol(col);
    expect(component.countryData[0].NewRecovered).toEqual(2);
  });
  it('should call sortCol newDeath descending',()=>{
    let col = ColumnName.newDeath;
    component.sortType = sortOrder.asc;
    fixture.detectChanges();
    spyOn(component,'getPageData').and.callThrough();
    component.sortCol(col);
    expect(component.countryData[0].NewDeaths).toEqual(20);
  });
  it('should call sortCol totalConfirmed descending',()=>{
    let col = ColumnName.totalConfirmed;
    component.sortType = sortOrder.asc;
    fixture.detectChanges();
    spyOn(component,'getPageData').and.callThrough();
    component.sortCol(col);
    expect(component.countryData[0].TotalConfirmed).toEqual(276081);
  });
  it('should call sortCol totalRecoverd descending',()=>{
    let col = ColumnName.totalRecoverd;
    component.sortType = sortOrder.asc;
    fixture.detectChanges();
    spyOn(component,'getPageData').and.callThrough();
    component.sortCol(col);
    expect(component.countryData[0].TotalRecovered).toEqual(300);
  });
  it('should call sortCol totalDeath descending',()=>{
    let col = ColumnName.totalDeath;
    component.sortType = sortOrder.asc;
    fixture.detectChanges();
    spyOn(component,'getPageData').and.callThrough();
    component.sortCol(col);
    expect(component.countryData[0].TotalDeaths).toEqual(7701);
  });
  it('should call sortCol country ascending',()=>{
    let col = ColumnName.country;
    component.sortType = sortOrder.desc;
    fixture.detectChanges();
    spyOn(component,'getPageData').and.callThrough();
    component.sortCol(col);
    expect(component.countryData[0].Country).toEqual('Afghanistan');
  });
  it('should call sortCol country descending',()=>{
    let col = ColumnName.country;
    component.sortType = sortOrder.desc;
    component.countryData=[ 
    {
      "ID": "4a1550be-59c6-4590-aff4-173f5791ad83",
      "Country": "Albania",
      "CountryCode": "AL",
      "Slug": "albania",
      "NewConfirmed": 21,
      "TotalConfirmed": 276081,
      "NewDeaths": 10,
      "TotalDeaths": 3497,
      "NewRecovered": 1,
      "TotalRecovered": 4,
      "Date": "2022-05-29T15:07:32.213Z"
    },
    {
      "ID": "54934645-57da-4778-b46a-4c2352753582",
      "Country": "Afghanistan",
      "CountryCode": "AF",
      "Slug": "afghanistan",
      "NewConfirmed": 10,
      "TotalConfirmed": 180122,
      "NewDeaths": 20,
      "TotalDeaths": 7701,
      "NewRecovered": 2,
      "TotalRecovered": 300,
      "Date": "2022-05-29T15:07:32.213Z"
    }]
    spyOn(component,'getPageData').and.callThrough();
    component.sortCol(col);
    expect(component.countryData[0].Country).toEqual('Afghanistan');
  });
  it('should call sortCol newConfirmed ascending',()=>{
    let col = ColumnName.newConfirmed;
    component.sortType = sortOrder.desc;
    spyOn(component,'getPageData').and.callThrough();
    component.sortCol(col);
    expect(component.countryData[0].NewConfirmed).toEqual(10);
  });
  it('should call sortCol newRecovered ascending',()=>{
    let col = ColumnName.newRecovered;
    component.sortType = sortOrder.desc;
    spyOn(component,'getPageData').and.callThrough();
    component.sortCol(col);
    expect(component.countryData[0].NewRecovered).toEqual(1);
  });
  it('should call sortCol newDeath ascending',()=>{
    let col = ColumnName.newDeath;
    component.sortType = sortOrder.desc;
    spyOn(component,'getPageData').and.callThrough();
    component.sortCol(col);
    expect(component.countryData[0].NewDeaths).toEqual(10);
  });
  it('should call sortCol totalConfirmed ascending',()=>{
    let col = ColumnName.totalConfirmed;
    component.sortType = sortOrder.desc;
    spyOn(component,'getPageData').and.callThrough();
    component.sortCol(col);
    expect(component.countryData[0].TotalConfirmed).toEqual(180122);
  });
  it('should call sortCol totalRecoverd ascending',()=>{
    let col = ColumnName.totalRecoverd;
    component.sortType = sortOrder.desc;
    spyOn(component,'getPageData').and.callThrough();
    component.sortCol(col);
    expect(component.countryData[0].TotalRecovered).toEqual(4);
  });
  it('should call sortCol totalDeath ascending',()=>{
    let col = ColumnName.totalDeath;
    component.sortType = sortOrder.desc;
    spyOn(component,'getPageData').and.callThrough();
    component.sortCol(col);
    expect(component.countryData[0].TotalDeaths).toEqual(3497);
  });
});
