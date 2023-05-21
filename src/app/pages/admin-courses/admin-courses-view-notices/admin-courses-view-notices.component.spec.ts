import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoursesViewNoticesComponent } from './admin-courses-view-notices.component';

describe('AdminCoursesViewNoticesComponent', () => {
  let component: AdminCoursesViewNoticesComponent;
  let fixture: ComponentFixture<AdminCoursesViewNoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCoursesViewNoticesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCoursesViewNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
