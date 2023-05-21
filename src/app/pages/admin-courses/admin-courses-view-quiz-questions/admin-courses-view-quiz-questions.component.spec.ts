import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoursesViewQuizQuestionsComponent } from './admin-courses-view-quiz-questions.component';

describe('AdminCoursesViewQuizQuestionsComponent', () => {
  let component: AdminCoursesViewQuizQuestionsComponent;
  let fixture: ComponentFixture<AdminCoursesViewQuizQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCoursesViewQuizQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCoursesViewQuizQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
