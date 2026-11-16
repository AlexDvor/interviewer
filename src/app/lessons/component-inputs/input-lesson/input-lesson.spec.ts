import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { InputLesson } from './input-lesson';

describe('InputLesson', () => {
  let component: InputLesson;
  let fixture: ComponentFixture<InputLesson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputLesson],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(InputLesson);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
