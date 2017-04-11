import {Component, OnInit, Input} from '@angular/core';
import {Organization} from "../../shared/organization";

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {

  @Input() organization: Organization;
  @Input() organizationId: number;

  constructor() { }

  ngOnInit() {
  }

}
