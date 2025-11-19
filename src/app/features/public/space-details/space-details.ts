import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth';
import { SpaceService } from '../../../core/services/space';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../../../core/api';

@Component({
  selector: 'app-space-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './space-details.html',
  styleUrls: ['./space-details.css']
})
export class SpaceDetails {

  /* Authentification */
  auth = inject(AuthService);

  get isLogged() {
    return this.auth.isLogged();
  }

  get isClient() {
    return this.auth.hasRole('ROLE_USER');
  }

  /* Services */
  route = inject(ActivatedRoute);
  spaceService = inject(SpaceService);
  http = inject(HttpClient);

  /* Données de l’espace */
  space: any = null;
  isLoading = true;

  /* Amenities du coliving */
  amenities: any[] = [];

  /* Formulaire de réservation */
  start: string = '';
  end: string = '';
  duo: boolean = false;

  /* Prix */
  priceHT = 0;
  taxes = 0;
  totalPrice = 0;
  readonly TAX_RATE = 0.2;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadSpace(id);
  }

  /* Charge un amenity via une URL API */
  loadAmenity(url: string) {
    // L’API renvoie "/api/amenities/6"
    // On doit l'appeler comme : http://localhost:8000/api/amenities/6
    const fullUrl = `${API_BASE_URL}${url.replace('/api', '')}`;
    return this.http.get(fullUrl);
  }

  /* Charger l'espace depuis Symfony */
  loadSpace(id: number) {
    this.spaceService.getSpaceById(id).subscribe({
      next: async (data) => {
        this.space = data;
        this.isLoading = false;

        /* Prix HT depuis l'API */
        this.priceHT = Number(this.space.pricePerMonth);
        this.updateTotals();

        /* Chargement des amenities du coliving */
        if (this.space.colivingSpace?.amenities?.length > 0) {
          const amenityRequests = this.space.colivingSpace.amenities.map((url: string) =>
            this.loadAmenity(url).toPromise()
          );

          this.amenities = await Promise.all(amenityRequests);
        }
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Erreur API:', err);
      }
    });
  }

  /* Recalcul du total */
  updateTotals() {
    this.taxes = this.priceHT * this.TAX_RATE;
    this.totalPrice = this.priceHT + this.taxes;
  }

  /* Envoi de la réservation */
  reserve() {
    if (!this.start || !this.end) {
      alert('Merci de remplir les dates.');
      return;
    }

    const payload = {
      startDate: this.start,
      endDate: this.end,
      isDuo: this.duo,
      space: `/api/private_spaces/${this.space.id}`,
      totalAmount: this.totalPrice
    };

    this.http.post(`${API_BASE_URL}/reservations`, payload).subscribe({
      next: () => {
        alert('Votre demande de réservation a été envoyée.');
      },
      error: () => {
        alert('Erreur lors de la réservation.');
      }
    });
  }
}
