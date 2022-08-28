import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorRegisterFormComponent } from './component/doctor-register-form/doctor-register-form.component';
import { HomeComponent } from './component/home/home.component';
import { PatientRegisterFormComponent } from './component/patient-register-form/patient-register-form.component';
import { SearchDoctorInfoComponent } from './component/search-doctor-info/search-doctor-info.component';
import { SearchPatientInfoComponent } from './component/search-patient-info/search-patient-info.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register-doctor', component: DoctorRegisterFormComponent },
  { path: 'register-patient', component: PatientRegisterFormComponent },
  { path: 'search-doctor', component: SearchDoctorInfoComponent },
  { path: 'search-patient', component: SearchPatientInfoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
