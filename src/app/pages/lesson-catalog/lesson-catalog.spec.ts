import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { LessonCatalog } from './lesson-catalog';

describe('LessonCatalog', () => {
  let component: LessonCatalog;
  let fixture: ComponentFixture<LessonCatalog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonCatalog],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LessonCatalog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
