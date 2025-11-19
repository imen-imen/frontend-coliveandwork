import { Routes } from '@angular/router';

// Importation directe des composants
import { Home } from './features/public/home/home';
import { About } from './features/public/about/about';
import { CitySpaces } from './features/public/city-spaces/city-spaces';
import { CityDetails } from './features/public/city-details/city-details';
import { SpaceDetails } from './features/public/space-details/space-details';
import { Faq } from './features/public/faq/faq';
import { TermsUse } from './features/legal/terms-use/terms-use';
import { PrivacyPolicy } from './features/legal/privacy-policy/privacy-policy';
import { Error404 } from './shared/components/error/error404/error404';
import { Login } from './features/auth/login/login';
import { RegisterClient } from './features/auth/register-client/register-client';
import { RegisterOwner } from './features/auth/register-owner/register-owner';

export const routes: Routes = [

  { path: '', component: Home },

  { path: 'qui-sommes-nous', component: About },

  { path: 'nos-espaces', component: CitySpaces },

  { path: 'city/:name', component: CityDetails },

  { path: 'espace/:id', component: SpaceDetails },

  { path: 'faq', component: Faq },

  { path: 'conditions-generales-d-utilisation', component: TermsUse },

  { path: 'politique-de-confidentialite', component: PrivacyPolicy },

// Login client
{ path: 'espace-client/login', component: Login, data: { userType: 'client' } },

// Login propriétaire
{ path: 'espace-proprietaire/login', component: Login, data: { userType: 'owner' } },

// Inscription client
{ path: 'espace-client/registration', component: RegisterClient },

// Inscription propriétaire
{ path: 'espace-proprietaire/registration', component: RegisterOwner },


  // 404
  { path: '**', component: Error404 },
];
