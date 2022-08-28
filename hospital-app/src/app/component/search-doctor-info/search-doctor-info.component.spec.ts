import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDoctorInfoComponent } from './search-doctor-info.component';

describe('SearchDoctorInfoComponent', () => {
  let component: SearchDoctorInfoComponent;
  let fixture: ComponentFixture<SearchDoctorInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDoctorInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchDoctorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
