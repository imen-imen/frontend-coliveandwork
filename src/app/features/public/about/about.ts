import { Component } from '@angular/core';
import { SearchBar } from '../../../shared/components/ui/search-bar/search-bar';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SearchBar],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
