import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { PatientRegisterFormComponent } from './component/patient-register-form/patient-register-form.component';
import { DoctorRegisterFormComponent } from './component/doctor-register-form/doctor-register-form.component';
import { SearchDoctorInfoComponent } from './component/search-doctor-info/search-doctor-info.component';
import { SearchPatientInfoComponent } from './component/search-patient-info/search-patient-info.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatientRegisterFormComponent,
    DoctorRegisterFormComponent,
    SearchDoctorInfoComponent,
    SearchPatientInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
