import { Routes } from '@angular/router';

// Pages publiques
import { Home } from './features/public/home/home';
import { About } from './features/public/about/about';
import { CitySpaces } from './features/public/city-spaces/city-spaces';
import { CityDetails } from './features/public/city-details/city-details';
import { SpaceDetails } from './features/public/space-details/space-details';
import { Faq } from './features/public/faq/faq';
import { TermsUse } from './features/legal/terms-use/terms-use';
import { PrivacyPolicy } from './features/legal/privacy-policy/privacy-policy';
import { Error404 } from './shared/components/error/error404/error404';

// Auth
import { Login } from './features/auth/login/login';
import { RegisterClient } from './features/auth/register-client/register-client';
import { RegisterOwner } from './features/auth/register-owner/register-owner';

// Guard
import { AuthGuard } from './core/guards/auth-guard';

// Layout Client
import { Layout } from './features/client/layout/layout';

// Pages Espace Client
import { Dashboard } from './features/client/dashboard/dashboard';
import { Reservations } from './features/client/reservations/reservations';
import { ContactAdmin } from './features/client/contact-admin/contact-admin';

// Profil client (existant dans /auth)
import { ClientProfile } from './features/client/client-profile/client-profile';

// Espace Propriétaire
import { OwnerProfile } from './features/owner/owner-profile/owner-profile';

export const routes: Routes = [

  // Pages publiques
  { path: '', component: Home },
  { path: 'qui-sommes-nous', component: About },
  { path: 'nos-espaces', component: CitySpaces },
  { path: 'city/:name', component: CityDetails },
  { path: 'espace/:id', component: SpaceDetails },
  { path: 'faq', component: Faq },
  { path: 'conditions-generales-d-utilisation', component: TermsUse },
  { path: 'politique-de-confidentialite', component: PrivacyPolicy },

  // Auth
  { path: 'espace-client/login', component: Login, data: { userType: 'client' } },
  { path: 'espace-proprietaire/login', component: Login, data: { userType: 'owner' } },
  { path: 'espace-client/registration', component: RegisterClient },
  { path: 'espace-proprietaire/registration', component: RegisterOwner },

  // Espace client avec layout
  {
    path: 'client',
    canActivate: [AuthGuard],
    component: Layout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'reservations', component: Reservations },
      { path: 'contact-admin', component: ContactAdmin },
      { path: 'profile', component: ClientProfile },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  // Espace propriétaire
  {
    path: 'owner',
    canActivate: [AuthGuard],
    component: OwnerProfile
  },

  // Page 404
  { path: '**', component: Error404 },
];
