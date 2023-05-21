import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoursesViewQuizzesComponent } from './admin-courses-view-quizzes.component';

describe('AdminCoursesViewQuizzesComponent', () => {
  let component: AdminCoursesViewQuizzesComponent;
  let fixture: ComponentFixture<AdminCoursesViewQuizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCoursesViewQuizzesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCoursesViewQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
