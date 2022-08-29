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
    private doctorService: DoctorService
  ) {
    this.doctorList = [];
    this.doctorInfo = new Doctor();
    this.selectedDoctor = new Doctor();
  }

  ngOnInit(): void {
    console.log('fetching doctor list');
    this.doctorService.getAllDoctors().subscribe({
      next: (docList) => {
        console.log('docList: ', docList);
        this.doctorList = docList.map((doc: Doctor) => doc.name);
      },
      error: (error) => {
        alert('Something went wrong during registering doctor!');
        console.log(error);
      },
    });
  }

  onSubmit(): void {
    console.log(this.selectedDoctor);
    this.doctorService.findDoctorByName(this.selectedDoctor).subscribe({
      next: (data: Doctor) => {
        this.doctorInfo = data;
      },
      error: (error) => {
        alert('Error in fetching doctor information!');
      },
    });
  }
}
