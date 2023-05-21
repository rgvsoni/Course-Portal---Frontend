import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoursesAddQuestionComponent } from './admin-courses-add-question.component';

describe('AdminCoursesAddQuestionComponent', () => {
  let component: AdminCoursesAddQuestionComponent;
  let fixture: ComponentFixture<AdminCoursesAddQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCoursesAddQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCoursesAddQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
