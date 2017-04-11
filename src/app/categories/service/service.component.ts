import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Organization} from "../../shared/organization";
import {OrganizationService} from "../../services/organization.service";
import {ServiceService} from "../../services/service.service";
import {Service} from "../../shared/service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-service',
  templateUrl: 'service.component.html'
})
export class ServiceComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private organizationIndex: number;
  selectedOrganization: Organization;
  @Input() organization: Organization;
  @Input() organizationId: number;
  services: Array<Service>;

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
}
