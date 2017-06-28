import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Package} from "../shared/package";
import {Service} from "../shared/service";
import {Observable} from "rxjs";


@Injectable()
export class BasketPackageService {

  package: Package;
  private baseUrl: string = 'http://137.74.116.6/rest/users/1/package';
  //private baseUrl: string = 'https://basket-211b4.firebaseio.com/.json';

  //ID to PUT packages needs to be taken from user package
  private userPackageUrl = 'http://137.74.116.6/rest/users/1/package';


  private putUrl: string = 'http://137.74.116.6/rest/packages/1';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getData(){
    const servicesFromServer = [];
    this.http.get(`${this.baseUrl}`).subscribe(
      (data) =>{
        this.package = data.json();
        for (let key in this.package.services) servicesFromServer.push(this.package.services[key]);
      }
    )
    return servicesFromServer;
  }

  storeServices(services : Service[]){
    console.log(JSON.stringify({services}));
    let body = JSON.stringify({ services });

    this.headers.append("Access-Control-Allow-Credentials", "true");
    this.headers.append("Access-Control-Allow-Methods", "POST,PUT, GET, OPTIONS, DELETE");

    let options = new RequestOptions({ headers: this.headers });

    return this.http.put(this.putUrl, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data;
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');

   //var packageItem = TypedJSON.parse('{ "id": 1, "login": "Doe" }', User);

   /* var packageFromServer = [];

    this.http.get(`${this.baseUrl}`).subscribe(
      (data) =>{

       // var packageItem = TypedJSON.parse(data.json() , User);
        this.package = TypedJSON.parse(data.json(), Package);
        //console.log("package" + this.package);
       // console.log("services" + services);

       for (let key in this.package.services){

          this.package.services[key] = null;
          this.package.services[key]= services[key];}

        packageFromServer[0] = this.package;


      }


    )
console.log(this.package);
return packageFromServer;*/




  //return this.http.put(this.putUrl, packageFromServer[0], this.headers ).subscribe();
  }
}
