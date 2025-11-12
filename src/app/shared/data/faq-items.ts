// Définition du modèle d'une question FAQ
export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}
// Liste complète des questions/réponses de la FAQ
export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: 'Qu’est-ce que Colive&Work ?',
    answer: `Colive&Work est une plateforme de co-living qui permet de trouver, réserver et gérer des espaces de vie partagés. Notre objectif : offrir un mode de vie flexible, moderne et convivial.`
  },
  {
    id: 2,
    question: 'Comment fonctionne le co-living ?',
    answer: `Le co-living combine un espace privé (chambre, salle d’eau) et des espaces partagés (cuisine, salon, coworking). C’est une manière de vivre ensemble tout en conservant son intimité.`
  },
  {
    id: 3,
    question: 'Comment s’inscrire sur Colive&Work ?',
    answer: `Il suffit de créer un compte client avec votre adresse e-mail et vos informations personnelles. Vous pourrez ensuite accéder à votre espace personnel et effectuer vos réservations.`
  },
  {
    id: 4,
    question: 'À qui s’adresse le co-living Colive&Work ?',
    answer: `Colive&Work s’adresse aux jeunes actifs, étudiants ou freelances qui souhaitent vivre dans un cadre confortable, moderne et propice aux échanges.`
  },
  {
    id: 5,
    question: 'Comment rechercher un espace disponible ?',
    answer: `Utilisez la barre de recherche de la page d’accueil pour filtrer les espaces selon la ville, la période et le nombre de personnes souhaité.`
  },
  {
    id: 6,
    question: 'Que vais-je trouver dans un espace de co-living ?',
    answer: `Chaque logement comprend une chambre privée équipée et des espaces communs comme une cuisine, un salon et un espace de travail partagés.`
  },
  {
    id: 7,
    question: 'Comment réserver un espace ?',
    answer: `Après inscription, choisissez un espace disponible et cliquez sur “Réserver”. Le propriétaire recevra votre demande et pourra l’accepter ou la refuser.`
  },
  {
    id: 8,
    question: 'Comment contacter le propriétaire d’un logement ?',
    answer: `Une fois connecté, vous pouvez discuter directement avec le propriétaire via la messagerie intégrée à la plateforme.`
  },
  {
    id: 9,
    question: 'Comment suivre mes réservations ?',
    answer: `Votre espace client vous permet de consulter vos réservations en cours, passées et futures, ainsi que leur statut.`
  },
  {
    id: 10,
    question: 'Puis-je modifier ou annuler une réservation ?',
    answer: `Oui, tant que la réservation n’a pas encore été confirmée par le propriétaire. Après validation, toute modification devra être convenue avec lui via la messagerie.`
  },
  {
    id: 11,
    question: 'Le ménage est-il compris dans le co-living ?',
    answer: `Oui, le ménage des espaces communs est inclus. Chaque résident est responsable de l’entretien de sa chambre privée.`
  },
  {
    id: 12,
    question: 'Puis-je choisir avec qui je vais habiter ?',
    answer: `Certains logements affichent le profil ou les centres d’intérêt des colocataires déjà présents. Vous pouvez ainsi choisir un environnement adapté à votre style de vie.`
  },
  {
    id: 13,
    question: 'L’application fonctionne-t-elle sur mobile ?',
    answer: `Oui, la plateforme Colive&Work est entièrement responsive et peut être utilisée sur ordinateur, tablette et smartphone.`
  },
  {
    id: 14,
    question: 'Que faire si j’ai oublié mon mot de passe ?',
    answer: `Cliquez sur “Mot de passe oublié” sur la page de connexion, puis suivez les instructions pour le réinitialiser.`
  },
  {
    id: 15,
    question: 'Quelles sont les règles de vie dans un espace de co-living ?',
    answer: `Les règles sont simples : respect des autres résidents, entretien des espaces communs et respect du règlement affiché dans le logement.`
  },
  {
    id: 16,
    question: 'Puis-je recevoir des amis ou de la famille ?',
    answer: `Oui, les visiteurs occasionnels sont autorisés, à condition de prévenir le propriétaire et de respecter la tranquillité des autres colocataires.`
  },
  {
    id: 17,
    question: 'Comment modifier mes informations personnelles ?',
    answer: `Depuis votre espace personnel, vous pouvez modifier vos informations (nom, adresse, mot de passe, etc.) à tout moment.`
  },
  {
    id: 18,
    question: 'Le co-living est-il adapté au télétravail ?',
    answer: `Oui, la plupart des espaces disposent d’un coin bureau dans chaque chambre et d’un espace commun de travail équipé d’une connexion haut débit.`
  },
  {
    id: 19,
    question: 'Quelle est la durée minimale d’un séjour ?',
    answer: `La durée minimale est d’un mois, mais certains logements acceptent des séjours plus courts selon la disponibilité et le propriétaire.`
  },
  {
    id: 20,
    question: 'Que faire en cas de problème avec un logement ou un autre résident ?',
    answer: `En cas de problème, vous pouvez en informer le propriétaire via la messagerie interne. Si le souci persiste, l’équipe Colive&Work peut intervenir pour trouver une solution.`
  }
];
