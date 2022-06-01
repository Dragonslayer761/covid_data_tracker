import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountryData } from 'src/app/Models/covid.models';
import { CovidDataTrackerService } from 'src/app/services/covid-data-tracker.service';

@Component({
  selector: 'app-data-preview',
  templateUrl: './data-preview.component.html',
  styleUrls: ['./data-preview.component.scss']
})
export class DataPreviewComponent implements OnInit,OnDestroy {
  countryData: any;
  countryObservable:Subscription;
  globalData : any;
  globalDataObservable:Subscription;
  callTimeStamp:Date;
  callTimeStampObservable:Subscription;
  filterCountryData:any;
  date:any;
  time:any;
  day:any;
  
  constructor(private covidService:CovidDataTrackerService) { }

  ngOnInit(): void {
   this.countryObservable = this.covidService.$countryDataEmit.subscribe(data =>{ 
      this.countryData = data
      this.filterCountryData = this.countryData
    });
    this.globalDataObservable = this.covidService.$globalDataEmit.subscribe(data => this.globalData = data);
    this.callTimeStampObservable= this.covidService.$callTimeStampEmit.subscribe(data => {
      this.callTimeStamp = data
      let timeData = new Date(this.callTimeStamp)
      let today = new Date()
      this.date = String(timeData.getDate()) +'/'+ String(timeData.getUTCMonth()) +'/'+ String(timeData.getFullYear());
      this.time = String(today.getHours()) +':'+String(today.getMinutes())+':'+String(today.getSeconds());
      this.day = timeData.toLocaleString('en-us', {  weekday: 'long' });
    });
  }
  getSearchResult(event:string){
    this.filterCountryData = this.countryData.filter( ( country : CountryData) =>{
      return country.Slug.includes(event.toLowerCase())
    })
  }
  
  ngOnDestroy(): void {
    if(this.callTimeStampObservable)
      this.callTimeStampObservable.unsubscribe()
    if(this.countryObservable)
      this.countryObservable.unsubscribe();
    if(this.globalDataObservable)
      this.globalDataObservable.unsubscribe();
  }
}
