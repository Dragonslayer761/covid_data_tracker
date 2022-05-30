import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-seacrh-bar',
  templateUrl: './seacrh-bar.component.html',
  styleUrls: ['./seacrh-bar.component.scss']
})
export class SeacrhBarComponent {
  @Output() setValue: EventEmitter<string> = new EventEmitter();
  private _searchSubject: Subject<string> = new Subject();
  searchText:any;

  constructor() {
    this._setSearchSubscription();
  }

  private _setSearchSubscription() {
    this._searchSubject.pipe(
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
}
