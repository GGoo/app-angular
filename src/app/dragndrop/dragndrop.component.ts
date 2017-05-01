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
    this.availableServices.push(new Service('Upięcie próbne', 35));
    this.availableServices.push(new Service('Upięcie ślubne', 90));
    this.availableServices.push(new Service('Strzyżenie damskie z modelowaniem', 90));
    this.availableServices.push(new Service('Strzyżenie męskie z modelowaniem', 60));
  }

  ngOnInit() {
  }

  removeFromAvailableServices(service) {
    const index: number = this.availableServices.indexOf(service);
    if (index !== -1) {
      this.availableServices.splice(index, 1);
    }
  }

  addToBasket($event: any) {
    const newService: Service = $event.dragData;
    for (const indx in this.shoppingBasket) {
      const service: Service = this.shoppingBasket[indx];
      if (service.name === newService.name) {
        return;
      }
    }
    this.shoppingBasket.push(new Service(newService.name, newService.cost));
    this.sortServices(this.shoppingBasket);
  }

  removeFromBasketToServices(service) {
      const index: number = this.shoppingBasket.indexOf(service);
      if (index !== -1) {
        this.shoppingBasket.splice(index, 1);
      }

    this.availableServices.push(service);
    this.sortServices(this.shoppingBasket);
    this.sortServices(this.availableServices);
  }

  totalCost(): number {
    let cost = 0;
    for (const indx in this.shoppingBasket) {
      const service: Service = this.shoppingBasket[indx];
      cost += service.cost;
    }
    return cost;
  }

  sortServices(array){
    array.sort((a: Service, b: Service) => {
      return a.name.localeCompare(b.name);
    });
  }

}

class Service {
  constructor(public name: string, public cost: number) {
  }
}
