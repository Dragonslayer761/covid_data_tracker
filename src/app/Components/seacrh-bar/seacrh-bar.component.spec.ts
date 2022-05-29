import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { SeacrhBarComponent } from './seacrh-bar.component';

describe('SeacrhBarComponent', () => {
  let component: SeacrhBarComponent;
  let fixture: ComponentFixture<SeacrhBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeacrhBarComponent ],
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
  it('should call updateSearch',()=>{
    let event={
      target:{
        value:"In"
      }
    };
    component.updateSearch(event);
    expect(component['_searchSubject'].subscribe(data =>{
      expect(data).toBe('In')
    }))
  });
  it('should be _setSearchSubscription',fakeAsync(()=>{
    spyOn(component.setValue,'emit');
    component['_searchSubject'].next('In')
    component['_setSearchSubscription']();
    tick(1000);
    component['_searchSubject'].subscribe((data)=>{
      expect(component.setValue.emit).toHaveBeenCalledWith(data);
    })
  }))
});
