import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../car';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule],
  template: ` <!-- This article element represents and entire listing -->
    @for (car of carList; track car) {
      <article class="listing">
        <div class="image-parent">
          <img class="product-image" src="https://placehold.co/100x100" />
        </div>
        <section class="details">
          <p class="title">{{car.make}} {{car.model}}</p>
          <hr />
          <p class="detail">
            <span>Year</span>
            <span>{{ car.year }}</span>
          </p>
          <div class="detail">
            <span>Transmission</span>
            <span>{{ car.transmission }}</span>
          </div>
          <p class="detail">
            <span>Mileage</span>
            <span>{{ car.miles }}</span>
          </p>
          <p class="detail">
            <span>Price</span>
            <span>&dollar;{{ car.price }}</span>
          </p>
        </section>
        <button (click)="saveCar(car)">Save</button>
      </article>
    } @empty {
      <p>No cars available.</p>
    }
      <!-- end car listing markup -->`,
  styles: ``,
})
export class ListingComponent {
  @Input() carList?: Car[];

  @Output() handleCarSaved = new EventEmitter<Car>();

  saveCar(car: Car) {
    this.handleCarSaved.emit(car);
  }
}
