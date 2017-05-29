import {User} from './user';

export class Blog {
  constructor(public id: number, public title: string, public description: string, public dateCreated: string, public user: User) {}
}
