import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
// console.log('heroes');
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes: Hero[];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
  this.getHeroes();
}

  onSelect(hero) {
    // console.log(hero);
    alert(hero);
  }
  getHeroes(): void {
  // this.heroes = this.heroService.getHeroes();
}

}
