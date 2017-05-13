import {User} from "./user";
import {Service} from "./service";
export class Package {
  constructor(public dateCreated: string, public id: number, public name: string, public totalCost: number, public users: User[],
              public services: Service[]){}
}
