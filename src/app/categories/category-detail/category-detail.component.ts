import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {Category} from "../../shared/category";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {CategoryService} from "../../services/category.service";
import {routerTransition} from "../router.animations";
import {OrganizationService} from "../../services/organization.service";
import {Organization} from "../../shared/organization";


@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class CategoryDetailComponent implements OnInit, OnDestroy {

  @Input() unselectedOrganization = true;
  private subscription: Subscription;
  private categoryIndex: number;
  selectedCategory: Category;
  organizations: Array<Organization>;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private organizationService: OrganizationService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.categoryIndex = params['id'];
        this.selectedCategory = this.categoryService.getCategory(this.categoryIndex);
        this.organizations = this.organizationService.getData();
      }
    );
  }

  onClickedSelectOrganization(){
    this.unselectedOrganization = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
