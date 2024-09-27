import { Component, inject, Inject } from '@angular/core';
import { HouseLocationComponent } from '../house-location/house-location.component';
import { HousingService } from '../housing.service';
import { HouseLocation } from '../house-location';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HouseLocationComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  houseLocation: HouseLocation[] = [];
  filteredLocationList: HouseLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.houseLocation = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.houseLocation;
  }

  filterResult(text: string) {
    if (!text) {
      this.filteredLocationList = this.houseLocation;
      return;
    } else {
      this.filteredLocationList = this.houseLocation.filter((houseLocation) =>
        houseLocation?.city.toLowerCase().includes(text.toLowerCase())
      );
    }
  }
}
