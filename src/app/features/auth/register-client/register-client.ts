import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth';

@Component({
  selector: 'app-register-client',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-client.html',
  styleUrls: ['./register-client.css']
})
export class RegisterClient implements OnInit {

  registerForm!: FormGroup;
  loading = false;
  apiError: string | null = null;
  successMessage: string | null = null;   
  userType: 'client' | 'owner' = 'client';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    const type = this.route.snapshot.data['userType'];
    this.userType = type === 'owner' ? 'owner' : 'client';

    // FORMULAIRE COMPLET
    this.registerForm = this.fb.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      birthdate: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      postalCode: ['', Validators.required],
      city: ['', Validators.required],
      streetNumber: ['', Validators.required],
      streetName: ['', Validators.required],

      // 🔥 Avec règle des 8 caractères
      password: ['', [Validators.required, Validators.minLength(8)]],

      acceptCGU: [false, Validators.requiredTrue],
      acceptPrivacy: [false, Validators.requiredTrue],
    });
  }

  // GETTERS
  get lastnameCtrl()  { return this.registerForm.get('lastname'); }
  get firstnameCtrl() { return this.registerForm.get('firstname'); }
  get birthdateCtrl() { return this.registerForm.get('birthdate'); }
  get genderCtrl()    { return this.registerForm.get('gender'); }
  get phoneCtrl()     { return this.registerForm.get('phone'); }
  get emailCtrl()     { return this.registerForm.get('email'); }
  get passwordCtrl()  { return this.registerForm.get('password'); }

  onSubmit() {

    if (this.loading) return;

    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.apiError = null;
    this.successMessage = null;

    // PAYLOAD 
    const payload = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      firstname: this.registerForm.value.firstname,
      lastname: this.registerForm.value.lastname,
      phone: this.registerForm.value.phone,
      birthdate: this.registerForm.value.birthdate,
      gender: this.registerForm.value.gender,
      postalCode: this.registerForm.value.postalCode,
      city: this.registerForm.value.city,
      streetNumber: this.registerForm.value.streetNumber,
      streetName: this.registerForm.value.streetName
    };

    this.auth.registerClient(payload).subscribe({
      next: () => {
        this.loading = false;

        // MESSAGE DE SUCCÈS
        this.successMessage = "Inscription réussie ! Vous pouvez maintenant vous connecter.";

        // Attendre 1 seconde avant de rediriger
        setTimeout(() => {
          this.router.navigate(['/espace-client/login']);
        }, 1000);
      },
      error: (err) => {
        this.loading = false;
        this.apiError = err.error?.error || "Erreur lors de l'inscription.";
      }
    });
  }
}
