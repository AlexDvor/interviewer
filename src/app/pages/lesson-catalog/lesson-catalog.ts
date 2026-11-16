import { Component } from '@angular/core';
import { CatalogNavigation } from './catalog-navigation/catalog-navigation';
import { LessonCard } from './lesson-card/lesson-card';
import { LESSONS } from '../../lessons/lesson-registry';

@Component({
  imports: [CatalogNavigation, LessonCard],
  selector: 'app-lesson-catalog',
  styleUrl: './lesson-catalog.scss',
  templateUrl: './lesson-catalog.html',
})
export class LessonCatalog {
  protected readonly lessons = LESSONS;
}
