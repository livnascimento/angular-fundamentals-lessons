import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: ` <router-outlet /> `,
  styles: [],
  imports: [RouterModule],
})
export class AppComponent {
  title = '07-routing-basics';
}
