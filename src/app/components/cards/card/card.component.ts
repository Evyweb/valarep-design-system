import {Component} from '@angular/core';

@Component({
  selector: 'val-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  isMenuOpen: boolean = false;
  Night: boolean = true;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme')
  }

    
}