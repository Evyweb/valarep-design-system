import {Component} from '@angular/core';

@Component({
  selector: 'val-card',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isMenuOpen: boolean = false;
  Night: boolean = true;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme')
  }

    
}