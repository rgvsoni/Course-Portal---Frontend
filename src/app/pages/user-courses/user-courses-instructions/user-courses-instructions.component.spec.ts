import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCoursesInstructionsComponent } from './user-courses-instructions.component';

describe('UserCoursesInstructionsComponent', () => {
  let component: UserCoursesInstructionsComponent;
  let fixture: ComponentFixture<UserCoursesInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCoursesInstructionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCoursesInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
