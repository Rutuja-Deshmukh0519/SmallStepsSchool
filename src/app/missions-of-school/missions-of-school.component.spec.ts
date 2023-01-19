import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionsOfSchoolComponent } from './missions-of-school.component';

describe('MissionsOfSchoolComponent', () => {
  let component: MissionsOfSchoolComponent;
  let fixture: ComponentFixture<MissionsOfSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionsOfSchoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionsOfSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
