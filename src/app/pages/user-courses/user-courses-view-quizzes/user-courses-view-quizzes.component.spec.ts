import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCoursesViewQuizzesComponent } from './user-courses-view-quizzes.component';

describe('UserCoursesViewQuizzesComponent', () => {
  let component: UserCoursesViewQuizzesComponent;
  let fixture: ComponentFixture<UserCoursesViewQuizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCoursesViewQuizzesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCoursesViewQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
