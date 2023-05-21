import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCoursesViewNoticesComponent } from './user-courses-view-notices.component';

describe('UserCoursesViewNoticesComponent', () => {
  let component: UserCoursesViewNoticesComponent;
  let fixture: ComponentFixture<UserCoursesViewNoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCoursesViewNoticesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCoursesViewNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
