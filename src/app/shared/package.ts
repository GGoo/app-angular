import {User} from "./user";
import {Service} from "./service";




export class Package {

  constructor(
    public id: number,


  public totalCost: number,


  public dateCreated: string,


  public user: User,


  public services: Service[]){};

}
