import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { NgHeroiconsModule } from "@dimaslz/ng-heroicons";
import { SideNavbarComponent } from './components/navigation/side-navbar/side-navbar.component';
import { CheckboxSliderComponent } from './components/basics/checkbox-slider/checkbox-slider.component';
import { SettingsComponent } from './components/page/settings/settings.component';
import { ButtonComponent } from './components/basics/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavbarComponent,
    CheckboxSliderComponent,
    SettingsComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    NgHeroiconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
