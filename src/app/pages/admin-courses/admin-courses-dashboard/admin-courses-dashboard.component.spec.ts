import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoursesDashboardComponent } from './admin-courses-dashboard.component';

describe('AdminCoursesDashboardComponent', () => {
  let component: AdminCoursesDashboardComponent;
  let fixture: ComponentFixture<AdminCoursesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCoursesDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCoursesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
