import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../entity/doctor';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  registerDoctorEndpoint = 'http://localhost:8082/doctor/saveDoctor';
  getAllDoctorsEndpoint = 'http://localhost:8082/doctor/findAllDoctors';
  findDoctorByNameEndpoint = 'http://localhost:8082/doctor/findByName';

  constructor(private http: HttpClient) {}

  registerDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.registerDoctorEndpoint, doctor);
  }

  getAllDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.getAllDoctorsEndpoint);
  }

  findDoctorByName(doctor: Doctor): Observable<Doctor> {
    return this.http.get<Doctor>(
      this.findDoctorByNameEndpoint + '/' + doctor.name
    );
  }
}
