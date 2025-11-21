import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth';

@Component({
  selector: 'app-client-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class Layout {

  // Contient les informations du client connecté
  user: any = null;

  private auth = inject(AuthService);

  ngOnInit(): void {
    // Récupère l'utilisateur stocké dans le token
    this.user = this.auth.getCurrentUser?.() ?? null;
  }
}
