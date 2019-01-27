import { Component, OnInit, Inject } from '@angular/core';
import { PromotionService } from './../services/promotion.service';
import { Promotion } from './../shared/promotion';
import { DishService } from './../services/dish.service';
import { Dish } from '../shared/dish';
import { LeaderService } from './../services/leader.service';
import { Leader } from './../shared/leader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dissErrMess: string;

  constructor(private dishService: DishService, private promotionService: PromotionService, private leaderService: LeaderService,
    @Inject('BaseURL') private BaseURL) {
  }

  ngOnInit() {
    this.dishService.getFeaturedDish().subscribe(dish => this.dish = dish, errmess => this.dissErrMess = <any>errmess);
    this.promotionService.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion);
    this.leaderService.getFeaturedLeader().subscribe(leader => this.leader = leader);
  }

}
