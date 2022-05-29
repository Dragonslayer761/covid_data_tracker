import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call getPageNo',()=>{
    let event={
      target:{
        innerText:"2"
      }
    }
    spyOn(component.getPage,'emit');
    component.getPageNo(event);
    expect(component.getPage.emit).toHaveBeenCalled()
  });
  it('should call getPrevious',()=>{
    component.presentPageNumber = 3;
    component.getPrevious();
    expect(component.presentPageNumber).toBe(2);
  });
  it('should call getPrevious',()=>{
    component.pageList=[1,2,3,4,5];
    component.presentPageNumber = 3;
    component.getNext();
    expect(component.presentPageNumber).toBe(4);
  });
});
