import { Component, Input } from '@angular/core';
import { data, User } from '../data';

@Component({
  selector: 'app-user-info',
  standalone: true,
  template: `
  @for (user of users; track $index) {
    <section style="display: flex; flex-direction: row; margin: 16px;">
      <article style="padding: 8px; border: solid 1px gray;">
        <h3>{{ user.name }}</h3>
        <h4>{{user.username}} - {{ user.email }}</h4>
        <p>🔗 {{user.website}}</p>
        <p>☎️ {{user.phone}}</p>
        <p>🏠 {{user.address.street}}, {{user.address.city}} - {{user.address.zipcode}}</p>
        <p>🏭 {{user.company.name}}</p>
      </article>
    </section>
  }
  `,
  styles: ``,
})
export class UserInfoComponent {
  @Input()
  users: User[] = [];
}
