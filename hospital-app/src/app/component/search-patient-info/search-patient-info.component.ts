import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/entity/patient';
import { PatientService } from 'src/app/service/patient-service.service';

@Component({
  selector: 'app-search-patient-info',
  templateUrl: './search-patient-info.component.html',
  styleUrls: ['./search-patient-info.component.css'],
})
export class SearchPatientInfoComponent implements OnInit {
  patient!: Patient;
  patientInfo!: Patient;

  constructor(private patientService: PatientService) {
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
      },
      error: (error) => {
        alert('Something went wrong during patient information fetch!');
        console.log(error);
      },
    });
  }
}
