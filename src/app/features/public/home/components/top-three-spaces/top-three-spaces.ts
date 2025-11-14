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
  private spaceService = inject(SpaceService);

  spaces: any[] = [];

ngOnInit() {
  this.spaceService.getTop3Spaces().subscribe({
    next: (res: any) => {
      const allSpaces = res['hydra:member'];

      // Filtrer seulement les espaces disponibles
      const activeSpaces = allSpaces.filter((s: any) => s.isActive === true);

      // Prendre seulement les 3 premiers
      this.spaces = activeSpaces.slice(0, 3);
    },
    error: err => console.error(err)
  });
}

}
