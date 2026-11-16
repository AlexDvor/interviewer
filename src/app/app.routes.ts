import { Routes } from '@angular/router';
import { LessonCatalog } from './pages/lesson-catalog/lesson-catalog';
import { LESSONS } from './lessons/lesson-registry';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LessonCatalog,
    title: 'Каталог завдань · Angular Practice',
  },
  {
    path: 'lessons',
    children: LESSONS.map((lesson) => ({
      path: lesson.path,
      title: `${lesson.title} · Angular Practice`,
      loadComponent: lesson.loadComponent,
    })),
  },
  { path: 'profile-lab', redirectTo: 'lessons/profile-editor', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
