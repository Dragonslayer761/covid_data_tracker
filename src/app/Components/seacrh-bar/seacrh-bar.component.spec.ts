import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { CovidDataTrackerService } from 'src/app/services/covid-data-tracker.service';

import { SeacrhBarComponent } from './seacrh-bar.component';

describe('SeacrhBarComponent', () => {
  let component: SeacrhBarComponent;
  let fixture: ComponentFixture<SeacrhBarComponent>;
  let covidService:CovidDataTrackerService;
  const mockCovidService = {
    $countryDataEmit: of([])
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeacrhBarComponent ],
      imports:[FormsModule],
      providers:[{ provide: CovidDataTrackerService, useValue: mockCovidService }],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeacrhBarComponent);
    component = fixture.componentInstance;
    covidService = TestBed.inject(CovidDataTrackerService) as jasmine.SpyObj<CovidDataTrackerService>;
    fixture.detectChanges();
  });
  afterEach(() => {
    fixture.destroy();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.searchText).toBe("");
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
