import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isSticky: boolean = false;

  @HostListener('window:scroll', [])
  handleScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= 100) { // Ajusta este valor según sea necesario
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }
}