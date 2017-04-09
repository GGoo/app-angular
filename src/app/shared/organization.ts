import {Address} from "./address";
export class Organization {
  constructor(public id: number, public name: string, public login: string, public password: string,
              public email: string, public phoneNumber: string, public active: boolean, public dateCreated: string,
              public address: Address
  ){}
}
