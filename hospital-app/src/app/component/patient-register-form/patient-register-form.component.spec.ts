import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientService } from 'src/app/service/patient-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PatientRegisterFormComponent } from './patient-register-form.component';
import { FormsModule } from '@angular/forms';

describe('PatientRegisterFormComponent', () => {
  let component: PatientRegisterFormComponent;
  let fixture: ComponentFixture<PatientRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientRegisterFormComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [PatientService],
    }).compileComponents();

    fixture = TestBed.createComponent(PatientRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the form correctly', () => {
    const fixture = TestBed.createComponent(PatientRegisterFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('form')).toBeDefined();
  });
});
