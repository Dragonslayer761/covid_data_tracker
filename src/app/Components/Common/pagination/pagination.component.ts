import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() pageList: number[];
  @Output() getPage = new EventEmitter();
  presentPageNumber: any = 1;
  pageListRender: any;
  constructor() { }
  getPageNo(event: any) {
    let val = "";
    val = event.target.innerText
    this.presentPageNumber = parseInt(val);
    this.getPage.emit(this.presentPageNumber);
  }
  getPrevious(){
    if(this.presentPageNumber  > 1){
      this.presentPageNumber-=1
    }
    this.getPage.emit(this.presentPageNumber);
  }
  getNext(){
    if(this.presentPageNumber  < this.pageList.length){
      this.presentPageNumber+=1
    }
    this.getPage.emit(this.presentPageNumber);
  }
}
