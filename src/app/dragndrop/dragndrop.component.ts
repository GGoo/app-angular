import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.component.html',
  styleUrls: ['./dragndrop.component.css']
})
export class DragndropComponent implements OnInit {
  availableServices: Array<Service> = [];
  shoppingBasket: Array<Service> = [];

  constructor() {
    this.availableServices.push(new Service('Upięcie próbne', 1, 35));
    this.availableServices.push(new Service('Upięcie ślubne', 1, 90));
    this.availableServices.push(new Service('Strzyżenie damskie z modelowaniem', 1, 90));
    this.availableServices.push(new Service('Strzyżenie męskie z modelowaniem', 1, 60));
  }

  ngOnInit() {
  }

  orderedService($event: any) {
    let orderedService: Service = $event.dragData;
    orderedService.quantity--;
  }

  addToBasket($event: any) {
    let newService: Service = $event.dragData;
    for (let indx in this.shoppingBasket) {
      let service: Service = this.shoppingBasket[indx];
      if (service.name === newService.name) {
        service.quantity++;
        return;
      }
    }
    this.shoppingBasket.push(new Service(newService.name, 1, newService.cost));
    this.shoppingBasket.sort((a: Service, b: Service) => {
      return a.name.localeCompare(b.name);
    });
  }

  totalCost(): number {
    let cost: number = 0;
    for (let indx in this.shoppingBasket) {
      let service: Service = this.shoppingBasket[indx];
      cost += (service.cost * service.quantity);
    }
    return cost;
  }
}

class Service {
  constructor(public name: string, public quantity: number, public cost: number) {
  }
}
