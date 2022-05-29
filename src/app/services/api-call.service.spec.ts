import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ApiCallService } from './api-call.service';

describe('ApiCallService', () => {
  let service: ApiCallService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(ApiCallService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call getCovidTrackerData',()=>{
    service.getCovidTrackerData('/app/data').subscribe(
      ()=>{
        const req = httpMock.expectOne('/app/data');
        expect(req.request.method).toEqual("GET");
        req.flush('');
    
        httpMock.verify();
      }
    );
   
  })
});
