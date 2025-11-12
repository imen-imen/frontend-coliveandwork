import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Button } from '../../../../../shared/components/ui/button/button';
import { FAQ_ITEMS } from '../../../../../shared/data/faq-items';

@Component({
  selector: 'app-preview-faq',
  standalone: true,
  imports: [CommonModule, RouterModule, Button],
  templateUrl: './preview-faq.html',
  styleUrl: './preview-faq.css',
})
export class PreviewFaq {
  @Input() limit = 3;

  get items() {
    return FAQ_ITEMS.slice(0, this.limit);
  }
}

