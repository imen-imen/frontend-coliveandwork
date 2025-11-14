import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../button/button';

@Component({
  selector: 'app-space-card',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './space-card.html',
  styleUrls: ['./space-card.css']
})
export class SpaceCard {
  @Input() space: any;
}
