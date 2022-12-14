import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/entity/doctor';
import { Patient } from 'src/app/entity/patient';
import { DoctorService } from 'src/app/service/doctor-service.service';
import { PatientService } from 'src/app/service/patient-service.service';

@Component({
  selector: 'app-patient-register-form',
  templateUrl: './patient-register-form.component.html',
  styleUrls: ['./patient-register-form.component.css'],
})
export class PatientRegisterFormComponent implements OnInit {
  patient!: Patient;
  docList!: Doctor[];

  constructor(
    private router: Router,
    private doctorService: DoctorService,
    private patientService: PatientService
  ) {
    this.patient = new Patient();
    this.docList = [];
  }

  ngOnInit(): void {
    console.log('fetching doctor list');
    this.doctorService.getAllDoctors().subscribe({
      next: (docList) => {
        console.log('docList: ', docList);
        this.docList = docList.map((doc: Doctor) => doc);
      },
      error: (error) => {
        alert('Something went wrong during registering doctor!');
        console.log(error);
      },
    });
  }

  onSubmit(): void {
    console.log(this.patient);
    this.patientService.registerPatient(this.patient).subscribe({
      next: () => {
        this.updateDoctorAppointment();
        this.goToHomePage();
      },
      error: (error) => {
        console.log(error);
        alert('Something went wrong during booking appointment!');
      },
    });
  }

  updateDoctorAppointment(): void {
    this.doctorService.findDoctorById(this.patient.visitedDoctor).subscribe({
      next: (docToUpdate) => {
        if (docToUpdate) {
          docToUpdate.patientsAttended += 1;
          console.log('DocUpdate: ', docToUpdate);
          this.doctorService.updateDoctor(docToUpdate).subscribe({
            next: (data) => console.log('Updated: ', data),
            error: (error) => console.log(error),
          });
        }
      },
    });
  }

  goToHomePage(): void {
    alert('Appointment created successfully!');
    this.router.navigate(['/home']);
  }
}
