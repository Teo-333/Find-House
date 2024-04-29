import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  constructor() { }

//   async getAllHousingLocations(): Promise<HousingLocation[]> {
//     try {
//         const response = await fetch(this.url);
//         if (!response.ok) {
         
//             throw new Error('Network response was not ok');
//         }
//         const jsonData = await response.json(); 
//         return jsonData;
//     } catch (error) {
//         console.error('Failed to fetch housing locations:', error);
//         return [];
//     }
// }

async getAllHousingLocations(): Promise<HousingLocation[]> {
  const data = await fetch(this.url);
  return await data.json();
};

async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
  const data = await fetch(`${this.url}/${id}`);
  return await data.json() ?? {};
}


// async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
//   try {
//       const response = await fetch(`${this.url}/${id}`);
//       if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return await response.json(); 
//   } catch (error) {
//       console.error('Failed to fetch housing location:', error);
//       return undefined; 
//   }
// }


  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Application submitted for ${firstName} ${lastName} at ${email}`);
  }
}
