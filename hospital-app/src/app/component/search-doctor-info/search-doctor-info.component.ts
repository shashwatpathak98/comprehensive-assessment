import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/entity/doctor';
import { DoctorService } from 'src/app/service/doctor-service.service';

@Component({
  selector: 'app-search-doctor-info',
  templateUrl: './search-doctor-info.component.html',
  styleUrls: ['./search-doctor-info.component.css'],
})
export class SearchDoctorInfoComponent implements OnInit {
  doctorList!: string[];
  doctorInfo!: Doctor;
  selectedDoctor!: Doctor;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: DoctorService
  ) {
    this.doctorList = [''];
    this.doctorInfo = new Doctor();
    this.selectedDoctor = new Doctor();
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.selectedDoctor);
  }
}
