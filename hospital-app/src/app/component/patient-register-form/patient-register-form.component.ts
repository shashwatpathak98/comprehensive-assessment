import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/entity/patient';
import { DoctorService } from 'src/app/service/doctor-service.service';

@Component({
  selector: 'app-patient-register-form',
  templateUrl: './patient-register-form.component.html',
  styleUrls: ['./patient-register-form.component.css'],
})
export class PatientRegisterFormComponent implements OnInit {
  patient!: Patient;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: DoctorService
  ) {
    this.patient = new Patient();
  }

  ngOnInit(): void {}

  onSubmit(): void {}
}
