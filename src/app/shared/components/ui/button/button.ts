import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './button.html',
  styleUrls: ['./button.css']
})
export class Button {
  @Input() label: string = 'Bouton';
  @Input() type: 'primary' | 'secondary' | 'outline' = 'primary';
  @Input() routerLink?: string | any[];
}
