import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfilePreview } from '../profile-preview/profile-preview';

@Component({
  imports: [RouterLink, ProfilePreview],
  selector: 'app-profile-lesson',
  styleUrl: './profile-lesson.scss',
  templateUrl: './profile-lesson.html',
})
export class ProfileLesson {}
