import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ColumnName, sortOrder } from 'src/app/enums/covid.enum';
import { CountryData } from 'src/app/Models/covid.models';

@Component({
  selector: 'app-country-data',
  templateUrl: './country-data.component.html',
  styleUrls: ['./country-data.component.scss']
})
export class CountryDataComponent implements OnInit, OnChanges {
  @Input() countryData: CountryData[];
  tenData: CountryData[] = [];
  startIndex: any = 0;
  endIndex: any;
  limit: number = 10;
  totalPage: number;
  pageNumber: number = 1;
  pagesArray: number[];
  sortType: string = sortOrder.asc;
  sortColname: any;
  iconShow: any = {
    Country: true,
    NewConfirmed: true,
    TotalConfirmed: true,
    NewDeaths: true,
    TotalDeaths: true,
    NewRecovered: true,
    TotalRecovered: true

  }
  constructor() { }

  ngOnInit(): void {
    this.totalPage = Math.ceil(this.countryData.length / this.limit);
    this.startIndex = (this.pageNumber - 1) * this.limit
    this.endIndex = this.startIndex + this.limit;
    if (this.countryData.length > this.limit)
      this.tenData = this.countryData.slice(this.startIndex, this.endIndex)
    else
      this.tenData = this.countryData
    this.pagesArray = new Array(this.totalPage).fill(1);
  }
  ngOnChanges(): void {
    this.totalPage = Math.ceil(this.countryData.length / this.limit);
    this.startIndex = (this.pageNumber - 1) * this.limit
    this.endIndex = this.startIndex + this.limit;
    if (this.countryData.length > this.limit)
      this.tenData = this.countryData.slice(this.startIndex, this.endIndex)
    else
      this.tenData = this.countryData
    this.pagesArray = new Array(this.totalPage).fill(1);
  }
  getPageData(event: any) {
    this.pageNumber = event
    this.startIndex = (this.pageNumber - 1) * this.limit
    this.endIndex = this.startIndex + this.limit;
    if (this.countryData.length > this.limit)
      this.tenData = this.countryData.slice(this.startIndex, this.endIndex)
    else
      this.tenData = this.countryData
  }
  sortCol(colName: any) {
    this.sortColname = colName;
    if (this.sortType == sortOrder.asc) {
      this.sortType = sortOrder.desc
      //sort descending
      switch (colName) {
        case ColumnName.country: {
          this.iconShow.Country = false
          this.countryData.sort((a, b) => (a.Country > b.Country ? -1 : 1))
          break;
        }
        case ColumnName.newConfirmed: {
          this.iconShow.NewConfirmed = false;
          this.countryData.sort((a, b) => b.NewConfirmed - a.NewConfirmed)
          break;
        }
        case ColumnName.newRecovered: {
          this.iconShow.NewRecovered = false;
          this.countryData.sort((a, b) => b.NewRecovered - a.NewRecovered)
          break;
        }
        case ColumnName.newDeath: {
          this.iconShow.NewDeaths = false;
          this.countryData.sort((a, b) => b.NewDeaths - a.NewDeaths)
          break;
        }
        case ColumnName.totalConfirmed: {
          this.iconShow.TotalConfirmed = false;
          this.countryData.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)
          break;
        }
        case ColumnName.totalRecoverd: {
          this.iconShow.TotalRecovered = false;
          this.countryData.sort((a, b) => b.TotalRecovered - a.TotalRecovered)
          break;
        }
        case ColumnName.totalDeath: {
          this.iconShow.TotalDeaths = false;
          this.countryData.sort((a, b) => b.TotalDeaths - a.TotalDeaths)
          break
        }
      }
    } else {
      this.sortType = sortOrder.asc
      //sort ascending
      switch (colName) {
        case ColumnName.country: {
          this.iconShow.Country = true;
          this.countryData.sort((a, b) => (a.Country > b.Country ? 1 : -1))
          break;
        }
        case ColumnName.newConfirmed: {
          this.iconShow.NewConfirmed = true;
          this.countryData.sort((a, b) => a.NewConfirmed - b.NewConfirmed)
          break;
        }
        case ColumnName.newRecovered: {
          this.iconShow.NewRecovered = true;
          this.countryData.sort((a, b) => a.NewRecovered - b.NewRecovered)
          break;
        }
        case ColumnName.newDeath: {
          this.iconShow.NewDeaths = true;
          this.countryData.sort((a, b) => a.NewDeaths - b.NewDeaths)
          break;
        }
        case ColumnName.totalConfirmed: {
          this.iconShow.TotalConfirmed = true;
          this.countryData.sort((a, b) => a.TotalConfirmed - b.TotalConfirmed)
          break;
        }
        case ColumnName.totalRecoverd: {
          this.iconShow.TotalRecovered = true;
          this.countryData.sort((a, b) => a.TotalRecovered - b.TotalRecovered)
          break;
        }
        case ColumnName.totalDeath: {
          this.iconShow.TotalDeaths = true;
          this.countryData.sort((a, b) => a.TotalDeaths - b.TotalDeaths)
          break
        }
      }
    }
    this.getPageData(this.pageNumber);
  }
}
