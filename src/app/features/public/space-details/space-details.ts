import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth';
import { SpaceService } from '../../../core/services/space';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../../../core/api';
import { Button } from '../../../shared/components/ui/button/button';
@Component({
  selector: 'app-space-details',
  standalone: true,
  imports: [CommonModule, FormsModule, Button],
  templateUrl: './space-details.html',
  styleUrls: ['./space-details.css']
})
export class SpaceDetails {

  /* Auth */
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

  /* Données */
  space: any = null;
  isLoading = true;

  /* Formulaire */
  start = '';
  end = '';
  duo = false;

  /* Prix */
  priceHT = 0;
  taxes = 0;
  totalPrice = 0;
  readonly TAX_RATE = 0.20;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadSpace(id);
  }

  /* Charger un espace */
  loadSpace(id: number) {
    this.spaceService.getSpaceById(id).subscribe({
      next: (data) => {
        this.space = data;
        this.isLoading = false;

        /* Prix HT initial */
        this.priceHT = Number(this.space.pricePerMonth);
        this.updateTotals();
      },
      error: (err) => {
        console.error('Erreur API space:', err);
        this.isLoading = false;
      }
    });
  }

  /* Calcul prix */
  updateTotals() {
    let base = this.priceHT;

    // OPTION DUO → +20%
    if (this.duo === true) {
      base = base * 1.2;
    }

    this.taxes = base * this.TAX_RATE;
    this.totalPrice = base + this.taxes;
  }

  /* Vérification durée minimale */
  isValidDates() {
    if (!this.start || !this.end) return false;

    const d1 = new Date(this.start);
    const d2 = new Date(this.end);

    const diff = d2.getTime() - d1.getTime();
    const days = diff / (1000 * 3600 * 24);

    return days >= 30; // minimum 1 mois
  }

  /* Envoi réservation */
  reserve() {
    if (!this.isValidDates()) {
      alert("La durée minimale d’un séjour est d’un mois.");
      return;
    }

    const payload = {
      startDate: this.start,
      endDate: this.end,
      isDuo: this.duo,
      space: `/api/private_spaces/${this.space.id}`,
      totalAmount: this.totalPrice.toFixed(2)
    };

    this.http.post(`${API_BASE_URL}/reservations`, payload).subscribe({
      next: () => alert("Votre réservation a été envoyée."),
      error: (err) => {
        console.error(err);
        alert("Erreur lors de la réservation.");
      }
    });
  }
}
