import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'val-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  isMenuOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen
  }

}
