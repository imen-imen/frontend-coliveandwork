import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../api';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  private http = inject(HttpClient);

  /** Top 3 */
  getTop3Spaces() {
    return this.http.get(
      `${API_BASE_URL}/private_spaces?isActive=true&order[rate]=desc`
    );
  }

  /** Pour la page /nos-espaces */
  getAllSpaces() {
    return this.http.get(
      `${API_BASE_URL}/private_spaces?isActive=true`
    );
  }
}
