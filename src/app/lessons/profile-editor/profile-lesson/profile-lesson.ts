import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfilePreview } from '../profile-preview/profile-preview';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [RouterLink, ProfilePreview, FormsModule],
  selector: 'app-profile-lesson',
  styleUrl: './profile-lesson.scss',
  templateUrl: './profile-lesson.html',
})
export class ProfileLesson {
  displayName:string="Олексій Мельник"
  role:string="Frontend Developer"
  bio:string= "Вивчаю Angular і створюю свій перший інтерактивний профіль."
  accentColor:string="#635bce"
  nameSize: number=28
  isAvailable:boolean=true
  lastContactMessage: string = 'Запитів на контакт ще немає.';


  resetProfile(): void {
  this.displayName = 'Олексій Мельник';
  this.role = 'Frontend Developer';
  this.bio = 'Вивчаю Angular і створюю свій перший інтерактивний профіль.';
  this.accentColor = '#635bce';
  this.nameSize = 28;
  this.isAvailable = true;
  this.lastContactMessage = 'Запитів на контакт ще немає.';
}

handleContactRequest(name: string): void {
  this.lastContactMessage = 'Запит на контакт: ' + name;
}


}
