import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { Params, ActivatedRoute } from '@angular/router'; // ActivatedRoute --> In order to fetch the route value
import { Location } from '@angular/common'; // Location helps to track the location of my page in the history browser
import { DishService } from './../services/dish.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish;
  constructor(private dishService: DishService, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.dishService.getDish(id).then(dish => this.dish = dish);
  }
  goBack(): void {
    this.location.back();
  }

}
