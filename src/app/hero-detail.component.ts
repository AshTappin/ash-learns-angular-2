import {Component, Input} from '@angular/core';
import {Hero} from './hero/hero.class';

@Component({
    selector: 'hero-detail',
    template: `
      <div *ngIf="hero">
        <h2>About {{hero.name}}</h2>
        <div>
          <label>id: </label>
          {{hero.id}}
        </div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="hero.name" placeholder="Who are you gonna call?">
        </div>
      </div>
    `
  })
export class HeroDetailComponent {

  @Input()
  hero: Hero;

}
