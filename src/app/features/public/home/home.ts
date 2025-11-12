import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from './components/hero/hero';
import { LeaderSection } from './components/leader-section/leader-section';
import { HowItWorks } from './components/how-it-works/how-it-works';
import { PreviewFaq } from "./components/preview-faq/preview-faq";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Hero, LeaderSection, HowItWorks, PreviewFaq],
  templateUrl: './home.html',
  styleUrls: ['./home.css'] 
})
export class Home {}  
