import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';
import { CovidDataTrackerService } from 'src/app/services/covid-data-tracker.service';

@Component({
  selector: 'app-seacrh-bar',
  templateUrl: './seacrh-bar.component.html',
  styleUrls: ['./seacrh-bar.component.scss']
})
export class SeacrhBarComponent implements OnInit ,OnDestroy {
  @Output() setValue: EventEmitter<string> = new EventEmitter();
  private _searchSubject: Subject<string> = new Subject();
  searchText:any ="";
  searchTextObservable:Subscription;

  constructor(private covidService:CovidDataTrackerService) {
    this._setSearchSubscription();
  }
  ngOnInit(): void {
    this.covidService.$countryDataEmit.subscribe(()=>{
      this.searchText=""
    })
  }
  private _setSearchSubscription() {
    this.searchTextObservable = this._searchSubject.pipe(
      debounceTime(500)
    ).subscribe((searchValue: string) => {
      this.setValue.emit(searchValue);
    });
  }
  clearText(){
    this.searchText=""
    this._searchSubject.next(this.searchText);
  }
  public updateSearch(event:any) {
    let searchTextValue = event;
    this._searchSubject.next(searchTextValue);
  }
  ngOnDestroy(){
    if(this.searchTextObservable)
      this.searchTextObservable.unsubscribe()
  }
}
