import {Component, OnInit} from "@angular/core";
import {Service} from "../shared/service";
import {BasketPackageService} from "../services/basket-package.service";
import "rxjs/Rx";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  services: Service[];
  service: Service;

  constructor(private basketPackageService: BasketPackageService ){ }

  ngOnInit() {
   //this.services= this.basketPackageService.getData();
  }

  clicked(service : Service){
    this.service = service;
}
  totalCost(){
    let cost = 0;
    for (const indx in this.services) {
      const service: Service = this.services[indx];
      cost += service.cost;
    }
    return cost;
  }
}
