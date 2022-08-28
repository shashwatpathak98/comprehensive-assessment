import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPatientInfoComponent } from './search-patient-info.component';

describe('SearchPatientInfoComponent', () => {
  let component: SearchPatientInfoComponent;
  let fixture: ComponentFixture<SearchPatientInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPatientInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPatientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
