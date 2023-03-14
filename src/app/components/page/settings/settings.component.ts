import { Component } from '@angular/core';

@Component({
  selector: 'val-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  isMenuOpen: boolean = false;
  constructor() { }

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen
  }

}
