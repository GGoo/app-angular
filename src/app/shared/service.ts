import {Category} from "./category";
import {JsonObject, JsonMember} from 'typedjson-npm';

@JsonObject
export class Service {

  @JsonMember
    public id: number;

  @JsonMember
  public name: string;

  @JsonMember
  public description: string;

  @JsonMember
  public cost: number;


  public movie: any [];


  public image: any [];

  public categories: Category []


  public opinions: any [] ;


  public distinct: boolean;

}
