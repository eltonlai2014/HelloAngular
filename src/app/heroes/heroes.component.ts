import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// 英雄列表組件
export class HeroesComponent implements OnInit {
  // heroes = HEROES;
  heroes: Hero[] | undefined;
  selectedHero: Hero | undefined;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.getHeroes();
  }

  /*
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  */

  getHeroes(): void {
    this.heroService.getHeroes()
        // tslint:disable-next-line: deprecation
        .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    this.selectedHero = hero;
  }

}
