import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCard } from '../product-card/product-card';

@Component({
  imports: [ProductCard, RouterLink],
  selector: 'app-input-lesson',
  styleUrl: './input-lesson.scss',
  templateUrl: './input-lesson.html',
})
export class InputLesson {
  productName = 'Studio Headphones';
  productPrice = 4200;
  productCategory = 'Аудіо';
}
