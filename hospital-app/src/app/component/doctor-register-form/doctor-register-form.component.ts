import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/entity/doctor';
import { DoctorService } from 'src/app/service/doctor-service.service';

@Component({
  selector: 'app-doctor-register-form',
  templateUrl: './doctor-register-form.component.html',
  styleUrls: ['./doctor-register-form.component.css'],
})
export class DoctorRegisterFormComponent implements OnInit {
  doctor!: Doctor;

  constructor(
    private router: Router,
    private service: DoctorService
  ) {
    this.doctor = new Doctor();
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.doctor);
    this.service.registerDoctor(this.doctor).subscribe({
      next: () => {
        this.goToHomePage();
      },
      error: (error) => {
        alert('Something went wrong during registering doctor!');
        console.log(error);
      },
    });
  }

  goToHomePage(): void {
    alert('Doctor sucessfully enrolled!');
    this.router.navigate(['/home']);
  }
}
