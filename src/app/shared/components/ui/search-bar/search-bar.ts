import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Button } from '../../ui/button/button';
import { CityService } from '../../../../core/services/city';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    Button
  ],
  templateUrl: './search-bar.html',
  styleUrls: ['./search-bar.css'],
})
export class SearchBar implements OnInit {

  cities: any[] = [];

  form = {
    city: '',
    startDate: '',
    endDate: '',
    people: 1
  };

  constructor(private cityService: CityService) {}

ngOnInit() {
  this.cityService.getCities().subscribe({
    next: (cities) => {
      console.log('== VILLES REÇUES ==', cities);
      this.cities = cities;
    },
    error: (err) => console.error('Erreur API cities :', err)
  });
}


  onSearch() {
    console.log("Recherche :", this.form);
  }
}
