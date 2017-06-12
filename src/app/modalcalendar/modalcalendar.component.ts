import { Component, Input, OnInit, ElementRef } from '@angular/core';

import {Options} from './modalcalendar';

@Component({
  selector: 'app-modalcalendar',
  templateUrl: './modalcalendar.component.html'
})


export class ModalcalendarComponent implements OnInit {
  @Input() options: Options;



  constructor(private element:ElementRef) {
      // console.log(this.options);
  }

  toggle(start, end, allDay) {
      console.log('inside modal component',start, end, allDay);
  }



  openModal() {

  }

  closeModal() {

  }

  onSubmit() {

  }

  ngOnInit() {
  }

}
