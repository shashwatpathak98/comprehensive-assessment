import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDoctorInfoComponent } from './search-doctor-info.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DoctorService } from 'src/app/service/doctor-service.service';
import { FormsModule } from '@angular/forms';

describe('SearchDoctorInfoComponent', () => {
  let component: SearchDoctorInfoComponent;
  let fixture: ComponentFixture<SearchDoctorInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchDoctorInfoComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [DoctorService],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchDoctorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the table correctly', () => {
    const fixture = TestBed.createComponent(SearchDoctorInfoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('table')).toBeDefined();
  });
});
