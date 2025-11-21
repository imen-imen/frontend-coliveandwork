import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth';
import { Button } from '../../../shared/components/ui/button/button';

@Component({
  selector: 'app-register-owner',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Button],
  templateUrl: './register-owner.html',
  styleUrls: ['./register-owner.css']
})
export class RegisterOwner implements OnInit {

  /** Formulaire propriétaire */
  registerForm!: FormGroup;

  /** Pour désactiver le bouton pendant requête */
  loading = false;

  /** Message d’erreur API */
  apiError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({

      // Identité
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],

      // Contact
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],

      // Adresse
      country: ['', Validators.required],
      postalCode: ['', Validators.required],
      city: ['', Validators.required],
      streetNumber: ['', Validators.required],
      streetName: ['', Validators.required],

      // Identité
      identityType: ['', Validators.required],

      // Cases obligatoires
      acceptPublication: [false, Validators.requiredTrue],
      certifyInfos: [false, Validators.requiredTrue],
      acceptCGU: [false, Validators.requiredTrue],
    });
  }

  /** GETTERS pour les erreurs HTML */
  get lastnameCtrl() { return this.registerForm.get('lastname'); }
  get firstnameCtrl() { return this.registerForm.get('firstname'); }
  get phoneCtrl() { return this.registerForm.get('phone'); }
  get emailCtrl() { return this.registerForm.get('email'); }
  get countryCtrl() { return this.registerForm.get('country'); }
  get postalCodeCtrl() { return this.registerForm.get('postalCode'); }
  get cityCtrl() { return this.registerForm.get('city'); }
  get streetNumberCtrl() { return this.registerForm.get('streetNumber'); }
  get streetNameCtrl() { return this.registerForm.get('streetName'); }
  get identityTypeCtrl() { return this.registerForm.get('identityType'); }

  /** Soumission */
  onSubmit(): void {

    if (this.loading) return;

    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.apiError = null;

    /** 
     * IMPORTANT :
     * Le back veut identityFile,
     * donc on envoie une valeur fictive.
     */
    const data = {
      ...this.registerForm.value,
      identityFile: "no-file"
    };

    this.auth.registerOwner(data).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.loading = false;
        this.apiError = err.error?.message || 'Erreur lors de l’inscription.';
      }
    });

  }
}
