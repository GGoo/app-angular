import {Category} from "./category";
export class Service {
  constructor(
    public id: number, public name: string, public description: string, public cost: number, public movie: any [] ,
    public image: any [],  public categories: Category [], public opinions: any [] , public distinct: boolean
  ){}
}
