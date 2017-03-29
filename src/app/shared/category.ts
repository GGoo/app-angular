import {Organization} from "./organization";

export class Category {
  constructor(public id : number, public name : string, public organizations: Organization[] = []){}
}
