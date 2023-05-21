import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoursesAddQuizComponent } from './admin-courses-add-quiz.component';

describe('AdminCoursesAddQuizComponent', () => {
  let component: AdminCoursesAddQuizComponent;
  let fixture: ComponentFixture<AdminCoursesAddQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCoursesAddQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCoursesAddQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
