import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CardComponent} from './components/cards/card/card.component';
import {NgHeroiconsModule} from "@dimaslz/ng-heroicons";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
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
