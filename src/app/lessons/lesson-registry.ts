import type { Route } from '@angular/router';

export interface LessonDefinition {
  readonly path: string;
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly topics: readonly string[];
  readonly theme: 'sage' | 'violet';
  readonly loadComponent: NonNullable<Route['loadComponent']>;
}

// Додай сюди новий урок: він автоматично з’явиться в каталозі та маршрутах.
export const LESSONS: readonly LessonDefinition[] = [
  {
    path: 'component-inputs',
    number: '01',
    title: 'Від батька до дитини',
    description: 'Картка товару, два компоненти та перша передача даних між ними.',
    topics: ['@Input', 'input()', 'Property binding'],
    theme: 'sage',
    loadComponent: () =>
      import('./component-inputs/input-lesson/input-lesson').then((m) => m.InputLesson),
  },
  {
    path: 'profile-editor',
    number: '02',
    title: 'Профіль, який реагує',
    description:
      'Редактор профілю з живим прев’ю. Поєднай поля, стилі та події в одному інтерфейсі.',
    topics: ['ngModel', '@Output', 'Class & style binding'],
    theme: 'violet',
    loadComponent: () =>
      import('./profile-editor/profile-lesson/profile-lesson').then((m) => m.ProfileLesson),
  },
];
