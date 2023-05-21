import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoursesAddNoticeComponent } from './admin-courses-add-notice.component';

describe('AdminCoursesAddNoticeComponent', () => {
  let component: AdminCoursesAddNoticeComponent;
  let fixture: ComponentFixture<AdminCoursesAddNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCoursesAddNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCoursesAddNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
