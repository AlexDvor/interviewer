import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { LessonDefinition } from '../../../lessons/lesson-registry';

@Component({
  imports: [RouterLink],
  selector: 'app-lesson-card',
  styleUrl: './lesson-card.scss',
  templateUrl: './lesson-card.html',
})
export class LessonCard {
  readonly lesson = input.required<LessonDefinition>();
}
