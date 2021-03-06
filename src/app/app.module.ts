import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HeroesComponent} from './heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroService} from './hero.service';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)],
  declarations: [AppComponent, DashboardComponent, HeroesComponent, HeroDetailComponent],
  providers:
    [HeroService],
  bootstrap:
    [AppComponent],
})

export class AppModule {
}
