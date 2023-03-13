import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'val-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {

  isMenuOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen
  }

}
