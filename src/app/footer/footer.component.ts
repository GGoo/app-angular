import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  // styleUrls: ['./header.component.css']
})
export class FooterComponent implements OnInit {
    public now = new Date();

  constructor() {
  }

  ngOnInit() {
  }

}
