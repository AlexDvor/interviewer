import { CommonModule } from '@angular/common'
import { Component, input } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-product-card',
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  name=input("")
  price=input(0)
  category=input("")
}
