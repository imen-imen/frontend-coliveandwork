import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login implements OnInit {

  loginForm: FormGroup;
  loading = false;
  apiError: string | null = null;
  userType: 'client' | 'owner' = 'client';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,   
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rememberMe: [false]
    });
  }

  ngOnInit() {
    const type = this.route.snapshot.data['userType'];
    this.userType = type === 'owner' ? 'owner' : 'client';
  }

  get emailCtrl() { return this.loginForm.get('email'); }
  get passwordCtrl() { return this.loginForm.get('password'); }

  onSubmit() {

    if (this.loading) return;

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.apiError = null;

    const formValue = this.loginForm.value;

    // Appel API via AuthService
    this.auth.login({
      email: formValue.email,
      password: formValue.password
    }).subscribe({

      next: (res) => {
        this.loading = false;

        // Sauvegarde token + refresh_token
        this.auth.saveTokens(res.token, res.refresh_token);

        const roles: string[] = res.roles ?? [];

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
          this.router.navigate(['/client/dashboard']);
        }
      },

      error: () => {
        this.loading = false;
        this.apiError = 'Email ou mot de passe incorrect.';
      }
    });
  }
}
