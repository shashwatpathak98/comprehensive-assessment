import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/entity/patient';
import { DoctorService } from 'src/app/service/doctor-service.service';
import { PatientService } from 'src/app/service/patient-service.service';

@Component({
  selector: 'app-search-patient-info',
  templateUrl: './search-patient-info.component.html',
  styleUrls: ['./search-patient-info.component.css'],
})
export class SearchPatientInfoComponent implements OnInit {
  patient!: Patient;
  patientInfo!: Patient;

  constructor(
    private patientService: PatientService,
    private doctorService: DoctorService
  ) {
    this.patient = new Patient();
    this.patientInfo = new Patient();
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.patient);
    this.patientService.getByName(this.patient).subscribe({
      next: (data: Patient) => {
        if (!data) {
          this.patientInfo = new Patient();
          alert('No patient information found!');
          return;
        }
        this.patientInfo = data;
        this.fetchDoctorName(data);
      },
      error: (error) => {
        alert('Something went wrong during patient information fetch!');
        console.log(error);
      },
    });
  }

  fetchDoctorName(data: Patient): void {
    console.log('fetched patient: ', data);
    this.doctorService.findDoctorById(data.visitedDoctor).subscribe({
      next: (doc) => {
        this.patientInfo = { ...this.patientInfo, visitedDoctor: doc.name };
      },
    });
  }
}
