import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-catalog-navigation',
  styleUrl: './catalog-navigation.scss',
  templateUrl: './catalog-navigation.html',
})
export class CatalogNavigation {
  readonly lessonCount = input(0);
}
