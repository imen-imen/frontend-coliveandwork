import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../api';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  private http = inject(HttpClient);

  /**
   * Récupère les espaces privés disponibles (isActive = true)
   * triés par note (rate) décroissante
   * puis on affichera les 3 premiers dans le composant
   */
  getTop3Spaces() {
    return this.http.get(
      `${API_BASE_URL}/private_spaces?isActive=true&order[rate]=desc`
    );
  }
}
