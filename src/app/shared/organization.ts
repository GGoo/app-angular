import {Address} from "./address";
export class Organization {
  constructor(public id : number, public name : string, public login : number, public password : string,
              public email : string, public active : boolean, public date_created : Date, public address : Address
  ){}
}
