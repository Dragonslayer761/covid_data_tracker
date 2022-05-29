import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeacrhBarComponent } from './seacrh-bar.component';

describe('SeacrhBarComponent', () => {
  let component: SeacrhBarComponent;
  let fixture: ComponentFixture<SeacrhBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeacrhBarComponent ]
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
});
