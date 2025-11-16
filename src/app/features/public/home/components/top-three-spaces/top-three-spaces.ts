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
        console.log("### REPONSE API ANGULAR ###", res);

        const allSpaces = res['member'];
        console.log("### MEMBER ###", allSpaces);

        const activeSpaces = allSpaces?.filter((s: any) => s.isActive === true);
        console.log("### ACTIVE ###", activeSpaces);

        console.log("### COLIVING ###", activeSpaces[0].colivingSpace);


        this.spaces = activeSpaces?.slice(0, 3) ?? [];
      },


      error: err => console.error("### ERREUR API ###", err)
    });
  }

}
