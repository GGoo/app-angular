import {Component, OnInit} from "@angular/core";
import {Package} from "../shared/package";
import {Service} from "../shared/service";
import {BasketService} from "../services/basket.service";
import "rxjs/Rx";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

package: Package;
services: Service[];

  constructor(private basketService: BasketService ){ }

  ngOnInit() {
    const servicesFromServer = [];
    this.basketService.getData().subscribe(
      (result) =>{
      this.package = result.json();
        console.log(this.package);
        for (let key in this.package.services) servicesFromServer.push(this.package.services[key]);
      }
    )
   this.services= servicesFromServer;
  }
}
