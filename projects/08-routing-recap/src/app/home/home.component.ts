import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    @for (title of productTitles; track $index) {
      <li> <a [routerLink]="['details', $index]"> {{ title }} </a> </li>
    } @empty {
      <li>There are no items.</li>
    }
  `,
  styles: ``
})
export class HomeComponent {
    productTitles = ['Product 1', 'Product 2', 'Product 3'];
}
