import {Component, OnInit, OnDestroy, trigger, state, style, transition, animate} from '@angular/core';
import {Category} from "../../shared/category";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {CategoryService} from "../../services/category.service";
import {routerTransition} from "../router.animations";


@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class CategoryDetailComponent implements OnInit, OnDestroy {
  state = 'normal';
  private subscription: Subscription;
  private categoryIndex: number;
  selectedCategory: Category;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.categoryIndex = params['id'];
        this.selectedCategory = this.categoryService.getCategory(this.categoryIndex);
      }
    );
    this.onAnimate();
  }

  onAnimate() {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
