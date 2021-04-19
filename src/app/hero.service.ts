import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) { }

  /*
  getHeroes(): Hero[] {
    return HEROES;
  }
  */

  getHeroes(): Observable<Hero[]> {
    // 取資料時更新狀態
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
