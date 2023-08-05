import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor() {
    this.onOpenMenu = this.onOpenMenu.bind(this);
  }

  isMenuOpen = false;

  onOpenMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:resize')
  onResize() {
    if (this.isMenuOpen && window.innerWidth > 720) {
      this.isMenuOpen = false;
    }
  }
}
