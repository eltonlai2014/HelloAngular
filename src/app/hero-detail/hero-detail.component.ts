import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // 接收頁面屬性 [hero]
  // @Input() hero: Hero | undefined;
  hero: Hero | undefined;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    // ! = NOT NULL
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id=' + id);
    if (id != null){
      this.heroService.getHero(+id)
      // tslint:disable-next-line: deprecation
      .subscribe(hero => this.hero = hero);
    }

  }

  goBack(): void {
    this.location.back();
  }

}
