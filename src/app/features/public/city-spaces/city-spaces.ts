import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SearchBar } from "../../../shared/components/ui/search-bar/search-bar";

@Component({
  selector: 'app-city-spaces',
  standalone: true,
  imports: [CommonModule, SearchBar],
  templateUrl: './city-spaces.html',
  styleUrl: './city-spaces.css',
})
export class CitySpaces {

  constructor(private router: Router) {}

  cities = [
    { name: 'Bordeaux', image: 'assets/images/cities/bordeaux.jpg' },
    { name: 'Lille', image: 'assets/images/cities/lille.jpg' },
    { name: 'Lyon', image: 'assets/images/cities/lyon.jpg' },
    { name: 'Marseille', image: 'assets/images/cities/marseille.jpg' },
    { name: 'Nantes', image: 'assets/images/cities/nantes.jpg' },
    { name: 'Paris', image: 'assets/images/cities/paris.jpg' },
    { name: 'Rennes', image: 'assets/images/cities/rennes.jpg' },
    { name: 'Strasbourg', image: 'assets/images/cities/strasbourg.jpg' },
    { name: 'Toulouse', image: 'assets/images/cities/toulouse.jpg' },
  ];

  openCity(cityName: string) {
    this.router.navigate(['/city', cityName]);
  }
}
