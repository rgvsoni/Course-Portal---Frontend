import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCoursesViewProfileComponent } from './user-courses-view-profile.component';

describe('UserCoursesViewProfileComponent', () => {
  let component: UserCoursesViewProfileComponent;
  let fixture: ComponentFixture<UserCoursesViewProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCoursesViewProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCoursesViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
