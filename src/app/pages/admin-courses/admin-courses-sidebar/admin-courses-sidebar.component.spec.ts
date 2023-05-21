import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoursesSidebarComponent } from './admin-courses-sidebar.component';

describe('AdminCoursesSidebarComponent', () => {
  let component: AdminCoursesSidebarComponent;
  let fixture: ComponentFixture<AdminCoursesSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCoursesSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCoursesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
