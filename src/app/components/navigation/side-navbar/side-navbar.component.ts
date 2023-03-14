import { Component } from '@angular/core';

@Component({
  selector: 'val-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent {

  isMenuOpen: boolean = false;
  constructor() { }
  
  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen
  }

}
