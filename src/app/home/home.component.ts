import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section class="home">
    <form>
      <input type="text" placeholder="Filter by city" />
      <button class="primary">Search</button>
    </form>
    </section>
    <section class="results">
      <app-housing-location></app-housing-location>
    </section>
  `,
  styleUrl: './home.component.css',
  imports : [HousingLocationComponent]
})
export class HomeComponent {

}
