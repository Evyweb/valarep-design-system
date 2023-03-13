import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import {NgHeroiconsModule} from "@dimaslz/ng-heroicons";

describe('NavBarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgHeroiconsModule],
      declarations: [ NavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When the component is initialized', () => {
    it('should have its menu closed', () => {
      expect(component.isMenuOpen).toBe(false);
    });
  });

  describe('[toggleMenu]', () => {
    describe('When the menu is already closed', () => {
      it('should open the menu', () => {
        // Arrange
        component.isMenuOpen = false;

        // Act
        component.toggleMenu();

        // Assert
        expect(component.isMenuOpen).toBe(true);
      });
    });

    describe('When the menu is already open', () => {
      it('should close the menu', () => {
        // Arrange
        component.isMenuOpen = true;

        // Act
        component.toggleMenu();

        // Assert
        expect(component.isMenuOpen).toBe(false);
      });
    });
  });
});
