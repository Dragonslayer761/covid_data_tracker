import { Injectable, OnInit ,EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CountryData, CovidData, GlobalData } from '../Models/covid.models';
import { ApiCallService } from './api-call.service';

@Injectable({
  providedIn: 'root'
})
export class CovidDataTrackerService{
  private allCountryData : CountryData[];
  $countryDataEmit : BehaviorSubject<CountryData[]> = new BehaviorSubject<CountryData[]>([new CountryData]);
  private globalData : GlobalData;
  $globalDataEmit : BehaviorSubject<GlobalData> = new BehaviorSubject<GlobalData>(new GlobalData());
  private callTimeStamp : any;
  $callTimeStampEmit : BehaviorSubject<any> = new BehaviorSubject<any>('');
  url:string = "https://api.covid19api.com/summary"
  constructor(private api:ApiCallService) {
    this.allCountryData =[];
    this.globalData =new GlobalData();
   }
  
  getAllData(){
    this.api.getCovidTrackerData(this.url).subscribe(data =>{
      this.allCountryData = data.Countries;
      this.$countryDataEmit.next(this.allCountryData);
      this.globalData = data.Global;
      this.$globalDataEmit.next(this.globalData);
      this.callTimeStamp = data.Date;
      this.$callTimeStampEmit.next(this.callTimeStamp);
    })
  }
  refreshPage(){
    this.allCountryData = [];
    this.$countryDataEmit.next(this.allCountryData);
    this.globalData = new GlobalData();
    this.$globalDataEmit.next(this.globalData);
  }
  
}
