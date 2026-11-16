import { Routes } from '@angular/router';
import { InputLesson } from './lessons/component-inputs/input-lesson/input-lesson';
import { ProfileLesson } from './lessons/profile-editor/profile-lesson/profile-lesson';

export const routes: Routes = [
  { path: '', component: InputLesson, title: 'Передача даних · Angular Practice' },
  { path: 'profile-lab', component: ProfileLesson, title: 'Редактор профілю · Angular Practice' },
];
