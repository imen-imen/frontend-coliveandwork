import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../api';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  private http = inject(HttpClient);

  /** Récupère les 3 meilleurs espaces */
  getTop3Spaces() {
    return this.http.get(
      `${API_BASE_URL}/private_spaces?isActive=true&order[rate]=desc`
    );
  }

  /** Récupère tous les espaces actifs */
  getAllSpaces() {
    return this.http.get(
      `${API_BASE_URL}/private_spaces?isActive=true`
    );
  }

  /** Récupère un espace par son ID */
  getSpaceById(id: number) {
    return this.http.get(`${API_BASE_URL}/private_spaces/${id}`);
  }

  
}
