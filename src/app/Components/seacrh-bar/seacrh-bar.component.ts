import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-seacrh-bar',
  templateUrl: './seacrh-bar.component.html',
  styleUrls: ['./seacrh-bar.component.scss']
})
export class SeacrhBarComponent implements OnInit {
  @Output() setValue: EventEmitter<string> = new EventEmitter();
  private _searchSubject: Subject<string> = new Subject();
  constructor() {
    this._setSearchSubscription();
  }

  ngOnInit(): void {
  }
  private _setSearchSubscription() {
    this._searchSubject.pipe(
      debounceTime(500)
    ).subscribe((searchValue: string) => {
      this.setValue.emit(searchValue);
    });
  }
  public updateSearch(event:any) {
    let searchTextValue = event.target.value;
    this._searchSubject.next(searchTextValue);
  }
}
