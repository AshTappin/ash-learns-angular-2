import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HeroesComponent} from './heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroService} from './hero.service';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule],
  declarations: [AppComponent, DashboardComponent, HeroesComponent, HeroDetailComponent],
  providers:
    [HeroService],
  bootstrap:
    [AppComponent],
})

export class AppModule {
}
