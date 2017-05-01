import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Organization} from "../shared/organization";
import {OrganizationService} from "../services/organization.service";
import {ServiceService} from "../services/service.service";
import {Service} from "../shared/service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dragndrop',
  templateUrl: 'dragndrop.component.html',
  styleUrls: ['./dragndrop.component.css']
})
export class DragndropComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private organizationIndex: number;
  selectedOrganization: Organization;
  @Input() organization: Organization;
  @Input() organizationId: number;
  services: Array<Service>;
  shoppingBasket: Array<Service> = [];

  constructor(private route: ActivatedRoute, private organizationService: OrganizationService, private serviceService: ServiceService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.organizationIndex = params['idService'];
        this.selectedOrganization = this.organizationService.getOrganization(this.organizationIndex);
        this.services = this.serviceService.getData();
      }
    );

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addToBasket($event: any) {
    const newService: Service = $event.dragData;
    for (const indx in this.shoppingBasket) {
      const service: Service = this.shoppingBasket[indx];
      if (service.name === newService.name) {
        return;
      }
    }
    this.shoppingBasket.push(newService);
    this.sortServices(this.shoppingBasket);
  }

  removeFromServices(service) {
    const index: number = this.services.indexOf(service);
    if (index !== -1) {
      this.services.splice(index, 1);
    }
  }

  removeFromBasketToServices(service) {
    const index: number = this.shoppingBasket.indexOf(service);
    if (index !== -1) {
      this.shoppingBasket.splice(index, 1);
    }

    this.services.push(service);
    this.sortServices(this.shoppingBasket);
    this.sortServices(this.services);
  }

  sortServices(array){
    array.sort((a: Service, b: Service) => {
      return a.name.localeCompare(b.name);
    });
  }

  totalCost(): number {
    let cost = 0;
    for (const indx in this.shoppingBasket) {
      const service: Service = this.shoppingBasket[indx];
      cost += service.cost;
    }
    return cost;
  }

}
