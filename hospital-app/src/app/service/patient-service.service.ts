import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../entity/patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  registerPatientEndpoint = 'http://localhost:8083/patient/savePatient';
  getAllPatientsEndpoint = 'http://localhost:8083/patient/findAllPatients';
  getPatientByNameEndpoint = 'http://localhost:8083/patient/findPatientByName';

  constructor(private http: HttpClient) {}

  registerPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.registerPatientEndpoint, patient);
  }

  getAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.getAllPatientsEndpoint);
  }

  getByName(patient: Patient): Observable<Patient> {
    return this.http.get<Patient>(
      this.getPatientByNameEndpoint + '/' + patient.name
    );
  }
}
