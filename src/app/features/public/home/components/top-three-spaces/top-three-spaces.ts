import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceCard } from '../../../../../shared/components/ui/space-card/space-card';
import { SpaceService } from '../../../../../core/services/space';

@Component({
  selector: 'app-top-three-spaces',
  standalone: true,
  imports: [CommonModule, SpaceCard],
  templateUrl: './top-three-spaces.html',
  styleUrls: ['./top-three-spaces.css']
})
export class TopThreeSpaces {

  // Injection du service permettant de récupérer les espaces
  private spaceService = inject(SpaceService);

  // Tableau des espaces à afficher
  spaces: any[] = [];

  ngOnInit() {

    // Appel API : récupération des 3 meilleurs espaces
    this.spaceService.getTop3Spaces().subscribe({

      next: (res: any) => {

        // Liste complète envoyée par l'API
        const allSpaces = res['member'];

        // On conserve seulement les espaces actifs
        const activeSpaces = allSpaces?.filter((s: any) => s.isActive === true);

        // On garde les 3 premiers
        this.spaces = activeSpaces?.slice(0, 3) ?? [];
      },

      // Si l'API plante, on affiche une erreur dans la console
      error: err => console.error("### ERREUR API ###", err)
    });
  }
}
