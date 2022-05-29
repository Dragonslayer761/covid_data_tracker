import { Component,OnInit } from '@angular/core';
import { CountryData } from './Models/covid.models';
import { CovidDataTrackerService } from './services/covid-data-tracker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'covidDataTracker';
  data:any;
  countryData : any;
  constructor(private covidService:CovidDataTrackerService){}
  ngOnInit(){
    this.covidService.getAllData();
    this.covidService.$countryDataEmit.subscribe(data => this.countryData = data)
  }
  refreshData(){
    this.covidService.refreshPage();
    this.covidService.getAllData();
  }
}
