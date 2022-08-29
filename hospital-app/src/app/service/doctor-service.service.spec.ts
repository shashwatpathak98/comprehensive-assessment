import { TestBed } from '@angular/core/testing';

import { DoctorService } from './doctor-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Doctor } from '../entity/doctor';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('DoctorService', () => {
  let service: DoctorService;
  let mockDoctors: Doctor[];
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = new DoctorService(httpClientSpy);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
