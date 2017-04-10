import {Component, OnInit, Input} from '@angular/core';
import {Organization} from "../../shared/organization";

@Component({
  selector: 'app-service',
  templateUrl: 'service.component.html'
})
export class ServiceComponent implements OnInit {
  @Input() organization: Organization;
  @Input() organizationId: number;

  constructor() { }

  ngOnInit() {
  }

}
