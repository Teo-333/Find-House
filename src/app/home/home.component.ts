import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';


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
      <app-housing-location *ngFor = "let housingLocation of housingLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrl: './home.component.css',
  imports : [CommonModule, HousingLocationComponent]
})
export class HomeComponent {
 housingLocationList: HousingLocation[] = [ {
  id: 0,
  name: 'Acme Fresh Start Housing',
  city: 'Chicago',
  state: 'IL',
  photo: '/assets/pexels-binyaminmellish-1396132.jpg',
  availableUnits: 4,
  wifi: true,
  laundry: true
},
{
  id: 1,
  name: 'A113 Transitional Housing',
  city: 'Santa Monica',
  state: 'CA',
  photo: '/assets/pexels-binyaminmellish-186077.jpg',
  availableUnits: 0,
  wifi: false,
  laundry: true
},
{
  id: 2,
  name: 'Warm Beds Housing Support',
  city: 'Juneau',
  state: 'AK',
  photo: '/assets/pexels-expect-best-79873-323775.jpg',
  availableUnits: 1,
  wifi: false,
  laundry: false
},
{
  id: 3,
  name: 'Homesteady Housing',
  city: 'Chicago',
  state: 'IL',
  photo: '/assets/pexels-expect-best-79873-323780.jpg',
  availableUnits: 1,
  wifi: true,
  laundry: false
},
{
  id: 4,
  name: 'Happy Homes Group',
  city: 'Gary',
  state: 'IN',
  photo: '/assets/pexels-luis-yanez-57302-206172.jpg',
  availableUnits: 1,
  wifi: true,
  laundry: false
},
{
  id: 5,
  name: 'Hopeful Apartment Group',
  city: 'Oakland',
  state: 'CA',
  photo: '../../assets/pexels-pixabay-164558.jpg',
  availableUnits: 2,
  wifi: true,
  laundry: true
},
{
  id: 6,
  name: 'Seriously Safe Towns',
  city: 'Oakland',
  state: 'CA',
  photo: '../../assets/pexels-pixabay-53610.jpg',
  availableUnits: 5,
  wifi: true,
  laundry: true
},
{
  id: 7,
  name: 'Hopeful Housing Solutions',
  city: 'Oakland',
  state: 'CA',
  photo: '../../assets/pexels-pixasquare-1115804.jpg',
  availableUnits: 2,
  wifi: true,
  laundry: true
},
{
  id: 8,
  name: 'Seriously Safe Towns',
  city: 'Oakland',
  state: 'CA',
  photo: '../../assets/pexels-scottwebb-1029599.jpg',
  availableUnits: 10,
  wifi: false,
  laundry: false
},
{
  id: 9,
  name: 'Capital Safe Towns',
  city: 'Portland',
  state: 'OR',
  photo: '../../assets/pexels-scottwebb-1029599.jpg',
  availableUnits: 6,
  wifi: true,
  laundry: true
}];
}
