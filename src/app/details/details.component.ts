import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location'; 


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  template: `
    <article class="details">
      <img class="listing-photo" [src]="housingLocation?.photo" alt="Exterior photo of {{housingLocation?.name}}">
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
        <section class="listing-features">
          <h2 class="section-heading">About this location</h2>
          <ul>
            <li>Available Units: {{housingLocation?.availableUnits}}</li>
            <li>Wifi : {{housingLocation?.wifi}}</li>
            <li>Laundry : {{housingLocation?.laundry}}</li>
          </ul>
        </section>
        <section class="listing-apply">
          <h2 class="section-heading">Apply now to live</h2>
          <button class="primary" type="button">Apply Now</button>
        </section>
      </section>
    </article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
 route: ActivatedRoute =  inject(ActivatedRoute);
 housingService = inject(HousingService);
 housingLocation: HousingLocation | undefined;

 constructor() {
   const housingLocationId = Number(this.route.snapshot.params['id']);
   this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
 }
}
