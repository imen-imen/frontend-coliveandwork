import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Button } from '../../ui/button/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, Button],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {

}
