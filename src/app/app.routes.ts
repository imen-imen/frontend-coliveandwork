import { Routes } from '@angular/router';

// Importation directe des composants
import { Home } from './features/public/home/home';
import { About } from './features/public/about/about';
import { Faq } from './features/public/faq/faq';
import { TermsUse } from './features/legal/terms-use/terms-use';
import { PrivacyPolicy } from './features/legal/privacy-policy/privacy-policy';
import { Error404 } from './shared/components/error/error404/error404';
import { Login } from './features/auth/login/login';


// Définition des routes principales de l'application
export const routes: Routes = [
    // Page "Accueil"
  { path: '', component: Home },
  
    // Page "Qui sommes-nous"
  { path: 'qui-sommes-nous', component: About },

  // Page "FAQ"
  { path: 'faq', component: Faq },

    // Page "Conditions Générales d'Utilisation "
  { path: 'conditions-generales-d-utilisation', component: TermsUse },

    // Page "Politique de confidentialité "
  { path: 'politique-de-confidentialite', component: PrivacyPolicy },

  // Page d’erreur 404 
{ path: '**', component: Error404 },

//Page login
  { path: 'login', component: Login },
];
