import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Button } from '../../ui/button/button';

@Component({
  selector: 'app-error404',
  standalone:true,
  imports: [CommonModule, RouterLink, Button],
  templateUrl: './error404.html',
  styleUrl: './error404.css',
})
export class Error404 {

}
