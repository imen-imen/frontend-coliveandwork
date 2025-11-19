import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-city-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './city-details.html',
  styleUrls: ['./city-details.css']
})
export class CityDetails {

  private http = inject(HttpClient);

  spaces: any[] = [];

  ngOnInit(): void {

    // Récupère tous les espaces privés
    this.http
      .get<any>('http://127.0.0.1:8000/api/private_spaces')
      .subscribe(res => {

        // On affiche tout
        this.spaces = res['hydra:member'] ?? [];
      });
  }
}
