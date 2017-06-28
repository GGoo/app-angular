import {JsonObject, JsonMember} from 'typedjson-npm';


@JsonObject
export class User {

  @JsonMember
  public id: number;

  @JsonMember
  public login: string;
}
