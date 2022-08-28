import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/entity/patient';

@Component({
  selector: 'app-search-patient-info',
  templateUrl: './search-patient-info.component.html',
  styleUrls: ['./search-patient-info.component.css'],
})
export class SearchPatientInfoComponent implements OnInit {
  patient!: Patient;
  patientInfo!: Patient;

  constructor() {
    this.patient = new Patient();
    this.patientInfo = new Patient();
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.patient);
  }
}
