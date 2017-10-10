import {Injectable} from '@angular/core';
import {Hero} from './hero/hero.class';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes(), 10000000000000000000000));
    });
  }
}

