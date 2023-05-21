import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCoursesDashboardComponent } from './user-courses-dashboard.component';

describe('UserCoursesDashboardComponent', () => {
  let component: UserCoursesDashboardComponent;
  let fixture: ComponentFixture<UserCoursesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCoursesDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCoursesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
