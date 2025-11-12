import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FAQ_ITEMS } from '../../../shared/data/faq-items';
@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  items = FAQ_ITEMS;
}
