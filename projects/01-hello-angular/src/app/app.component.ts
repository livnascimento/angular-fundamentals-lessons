import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>Those are my favorite books</h1>
    <p>If you're here, you're probably interested in reading!</p>
    <ol>
      <li>The lion, the witch and the wardrobe</li>
      <li>Gulliver's Travels</li>
      <li>The Secret Garden</li>
    </ol>
  `,
  styles: `ol { list-style-type: upper-roman; }`,
})
export class AppComponent { }
