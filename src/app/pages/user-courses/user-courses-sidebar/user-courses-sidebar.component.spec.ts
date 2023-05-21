import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCoursesSidebarComponent } from './user-courses-sidebar.component';

describe('UserCoursesSidebarComponent', () => {
  let component: UserCoursesSidebarComponent;
  let fixture: ComponentFixture<UserCoursesSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCoursesSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCoursesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
