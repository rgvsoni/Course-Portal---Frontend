import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoursesUpdateQuizComponent } from './admin-courses-update-quiz.component';

describe('AdminCoursesUpdateQuizComponent', () => {
  let component: AdminCoursesUpdateQuizComponent;
  let fixture: ComponentFixture<AdminCoursesUpdateQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCoursesUpdateQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCoursesUpdateQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
