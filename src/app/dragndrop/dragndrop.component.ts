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
        service.quantity++;
        return;
      }
    }
    this.shoppingBasket.push(new Service(newService.name, 1, newService.cost));
    this.shoppingBasket.sort((a: Service, b: Service) => {
      return a.name.localeCompare(b.name);
    });
  }


  removeFromBasket(service) {
      const index: number = this.shoppingBasket.indexOf(service);
      if (index !== -1) {
        this.shoppingBasket.splice(index, 1);
      }

    this.availableServices.push(service);
    this.shoppingBasket.sort((a: Service, b: Service) => {
    return a.name.localeCompare(b.name);
     });
    this.availableServices.sort((a: Service, b: Service) => {
      return a.name.localeCompare(b.name);
    });
  }

  totalCost(): number {
    let cost = 0;
    for (const indx in this.shoppingBasket) {
      const service: Service = this.shoppingBasket[indx];
      cost += (service.cost * service.quantity);
    }
    return cost;
  }
}

class Service {
  constructor(public name: string, public quantity: number, public cost: number) {
  }
}
