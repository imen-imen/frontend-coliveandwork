import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Button } from '../../../shared/components/ui/button/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Button],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login implements OnInit {

  // Formulaire
  loginForm: FormGroup;

  // Gestion API
  loading = false;
  apiError: string | null = null;

  // Type d'utilisateur (client ou propriétaire)
  userType: 'client' | 'owner' = 'client';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute // lire le type depuis la route
  ) {

    // Champs + validations
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rememberMe: [false]
    });
  }

  // Détecte si l'utilisateur vient de "espace-client" ou "espace-proprietaire"
  ngOnInit() {
    const type = this.route.snapshot.data['userType'];
    this.userType = type === 'owner' ? 'owner' : 'client';
  }

  // Raccourcis pour le template
  get emailCtrl() { return this.loginForm.get('email'); }
  get passwordCtrl() { return this.loginForm.get('password'); }

  // Soumission du formulaire
  onSubmit() {

    // Empêcher double clic
    if (this.loading) return;

    // Affiche les erreurs si invalide
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.apiError = null;

    const formValue = this.loginForm.value;

    // Appel API login Symfony
    this.http.post<any>('http://127.0.0.1:8000/api/login', {
      email: formValue.email,
      password: formValue.password
    }).subscribe({
      next: (res) => {
        this.loading = false;

        // Enregistre le token
        if (res.token) {
          localStorage.setItem('token', res.token);
        }

        const roles: string[] = res.user?.roles ?? [];

        // Redirection selon rôle
        if (roles.includes('ROLE_ADMIN')) {
          this.router.navigate(['/admin']);
        } 
        else if (roles.includes('ROLE_OWNER')) {
          this.router.navigate(['/proprietaire/espace']);
        } 
        else if (roles.includes('ROLE_EMPLOYEE')) {
          this.router.navigate(['/employe/espace']);
        } 
        else {
          this.router.navigate(['/client/espace']);
        }
      },

      // Erreur API
      error: () => {
        this.loading = false;
        this.apiError = 'Email ou mot de passe incorrect.';
      }
    });
  }
}
