import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../../../../../shared/components/ui/button/button';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'] ,
})
export class Hero {}
