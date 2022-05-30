import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SeacrhBarComponent } from './seacrh-bar.component';

describe('SeacrhBarComponent', () => {
  let component: SeacrhBarComponent;
  let fixture: ComponentFixture<SeacrhBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeacrhBarComponent ],
      imports:[FormsModule],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeacrhBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call clearText',()=>{
    component.searchText="";
    spyOn(component['_searchSubject'],'next');
    component.clearText();
    expect(component['_searchSubject'].next).toHaveBeenCalled();
  })
  it('should call updateSearch',()=>{
    let event="In";
    spyOn(component['_searchSubject'],'next');
    component.updateSearch(event);
    expect(component['_searchSubject'].next).toHaveBeenCalledOnceWith('In')
  });
  it('should be _setSearchSubscription',fakeAsync(()=>{
    spyOn(component.setValue,'emit');
    component['_searchSubject'].next('In')
    component['_setSearchSubscription']();
    tick(1000);
    expect(component.setValue.emit).toHaveBeenCalledWith('In');
  }))
});
