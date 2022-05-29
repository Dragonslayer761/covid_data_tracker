import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CovidData } from '../Models/covid.models';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http:HttpClient) { }

  getCovidTrackerData(url:any){
    return this.http.get<CovidData>(url)
  }
}
