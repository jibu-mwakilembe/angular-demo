import { Component, Input } from '@angular/core';
import { HouseLocation } from '../house-location';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-house-location',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './house-location.component.html',
  styleUrl: './house-location.component.css',
})
export class HouseLocationComponent {
  @Input() houseLocation!: HouseLocation;
}
