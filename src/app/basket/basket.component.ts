import { Component, OnInit } from '@angular/core';
import {BasketService} from "../services/basket.service";
import {Package} from "../shared/package";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

package: Package;

  constructor(private basketService: BasketService) { }

  ngOnInit() {
   this.basketService.getData();
    console.log(this.package);
  }

}
