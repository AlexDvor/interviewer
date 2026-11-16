import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { LESSONS } from '../../../lessons/lesson-registry';
import { LessonCard } from './lesson-card';

describe('LessonCard', () => {
  let component: LessonCard;
  let fixture: ComponentFixture<LessonCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonCard],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LessonCard);
    fixture.componentRef.setInput('lesson', LESSONS[0]);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
