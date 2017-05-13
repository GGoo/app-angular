import {User} from "./user";
import {Service} from "./service";
export class Package {
  constructor(public id: number, public name: string, public dateCreated: string, public totalCost: number, public users: User[],
              public services: Service[]){}
}
