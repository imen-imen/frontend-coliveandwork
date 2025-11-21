import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { API_BASE_URL } from '../../api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private router = inject(Router);

  private TOKEN_KEY = 'token';
  private REFRESH_KEY = 'refresh_token';

  /**
   * Authentification d'un utilisateur
   */
  login(credentials: { email: string; password: string }) {

  
    return this.http.post<any>(`${API_BASE_URL}/login_check`, credentials);
  }

  /**
   * Déconnexion : suppression des tokens et redirection
   */
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_KEY);
    this.router.navigate(['/']);
  }

  /**
   * Inscription d'un client
   */
  registerClient(data: any) {
    return this.http.post(`${API_BASE_URL}/register/client`, data);
  }

  /**
   * Inscription d'un propriétaire
   */
  registerOwner(data: any) {
    return this.http.post(`${API_BASE_URL}/register/owner`, data);
  }

  /**
   * Sauvegarde du token et du refresh token
   */
  saveTokens(token: string, refresh: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.REFRESH_KEY, refresh);
  }

  /**
   * Récupère le token actuel
   */
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  /**
   * Vérifie si un utilisateur est connecté
   */
  isLogged(): boolean {
    return !!this.getToken();
  }

  /**
   * Décode le token JWT pour obtenir l'utilisateur courant
   */
  getCurrentUser(): any {
    const token = this.getToken();
    if (!token) return null;

    try {
      return jwtDecode(token);
    } catch {
      return null;
    }
  }

  /**
   * Vérifie si l'utilisateur courant possède un rôle donné
   */
  hasRole(role: string): boolean {
    const user = this.getCurrentUser();
    return user?.roles?.includes(role) ?? false;
  }
}
