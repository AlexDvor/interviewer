import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ProfileLesson } from './profile-lesson';

describe('ProfileLesson', () => {
  let component: ProfileLesson;
  let fixture: ComponentFixture<ProfileLesson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileLesson],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileLesson);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
