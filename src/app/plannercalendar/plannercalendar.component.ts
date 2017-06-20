import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment/moment';

declare var $: any;

export interface Task {
  id?: Number,
  name: String,
  description?: String,
  date: String,
  dueDate: String
}

@Component({
  moduleId: module.id,
  selector: 'app-plannercalendar',
  templateUrl: './plannercalendar.component.html'
})
export class PlannerCalendarComponent implements OnInit, AfterViewInit {
  private today: String = moment().format('YYYY-MM-DD');

  private modalToggle: Boolean = false;
  modal: HTMLElement;
  private modalStatus: Boolean = false;
  private modalBackdrop: HTMLElement;

  private task: any = {
    name: '',
    description: '',
    date: '',
    dueDate: '',
    dTime: '',
    dDate: '',
    ddTime: '',
    ddDate: ''
  }

  private events: Array<Object> = [
      {
        title: 'Jeszcze nie wiem',
        start: '2017-06-10T20:30:00',
        end: '2017-06-06T21:45:00'
      }
    ]

  constructor(private element : ElementRef) {
    this.calendarOptions['now'] = this.today;
    this.calendarOptions['defaultDate'] = this.today;
  }

  saveChanges() {
    $('angular2-fullcalendar').fullCalendar('renderEvent',
                {
                  title: this.task.name,
                  start: this.task.date,
                  end: this.task.dueDate
                }
              );

    this.closeModal();
  }

  updateTaskDate() {
    if (this.task.dDate && this.task.dTime) {
      this.task.date = this.task.dDate + 'T' + this.task.dTime + ':00';
    }
  }

  updateTaskDueDate() {
    if (this.task.ddDate && this.task.ddTime) {
      this.task.dueDate = this.task.ddDate + 'T' + this.task.ddTime + ':00';
    }
  }

  toggleModal() {
    this.modal = <HTMLElement>document.querySelector('#app-modalcalendar');
    console.log('modal element',this.modal);
    if (!this.modalToggle) {
      this.openModal();
    } else {
      this.closeModal();
    }
  }

  openModal() {
    this.modalToggle = true;
    this.modal.classList.add('show', 'in');
    this.createBackdrop();
  }

  closeModal() {
    this.modalToggle = false;
    this.modal.classList.remove('show', 'in');
    this.removeBackdrop();
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.modal = <HTMLElement>document.querySelector('#app-modalcalendar');

    // this.task = {
    //   name: this.events[0]['title'],
    //   date: this.events[0]['start'],
    //   dueDate: this.events[0]['end']
    // }
  }

  createBackdrop() {
    this.modalBackdrop = document.createElement('div');
    this.modalBackdrop.classList.add('modal-backdrop', 'fade', 'in', 'show');
    document.getElementsByTagName('body')[0].appendChild(this.modalBackdrop);
  }

  removeBackdrop() {
    this.modalBackdrop.parentNode.removeChild(this.modalBackdrop);
  }

  toggle(start, end, allDay) {
    console.log('plannercalendar', start, end, allDay);

    this.toggleModal();

    $('angular2-fullcalendar').fullCalendar('unselect');
  }

  onSubmit(data) {
    // tutaj mamy PUT do RESTA z zapisem
    $('angular2-fullcalendar').fullCalendar('renderEvent', data);
  }

  calendarOptions:Object = {
        droppable: true,
        dropAccept: '.fc-event',
        // eventOverlap: false,
        header: {
          left: 'prevYear,prev,next,nextYear today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listWeek'
        },
        height: '600px',
        fixedWeekCount : true,
        defaultDate: '2017-06-20',
        defaultView: 'agendaWeek',
        timeFormat: 'H:mm',
        titleFormat: 'D MMMM YYYY',
        allDayText: 'Cały dzień',
        buttonText: {
          today:    'dzisiaj',
          month:    'miesiąc',
          week:     'tydzień',
          day:      'dzień',
          list:     'lista'
        },
        locale: 'pl',
        views: {
            agenda: {
              timeFormat: 'H:mm',
              slotLabelFormat: 'H:mm'
            }
        },
        businessHours: true,
        editable: true,
        eventClick: (calEvent, jsEvent, view) => {
            console.log(jsEvent.target);
            console.log('Event: ' + calEvent.title);
            console.log('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
            console.log('View: ' + view.name);
            let $parent = $(jsEvent.target).closest('a');

            // change the border color just for fun
            $parent.css('border-color', 'red');
        },
        drop: function(date, jsEvent, ui) {
          console.log('drop', arguments);
          var originalEventObject = $(this).data('eventObject');

          var copiedEventObject = $.extend({}, originalEventObject);

          copiedEventObject.start = date;

          $('angular2-fullcalendar').fullCalendar('renderEvent', copiedEventObject, true);

          $(this).remove();
        },
        eventReceive: function(event) { // called when a proper external event is dropped
          console.log('eventReceive', event);
        },
        eventDrop: function(event) { // called when an event (already on the calendar) is moved
          console.log('eventDrop', event);
        },
        selectable: true,
        selectHelper: true,
        /*
          when user select timeslot this option code will execute.
          It has three arguments. Start,end and allDay.
          Start means starting time of event.
          End means ending time of event.
          allDay means if events is for entire day or not.
        */
       select: this.toggle,
        // select: (start, end, allDay) => {
        //   /*
        //     after selection user will be promted for enter title for event.
        //   */
        //   let title = prompt('Event Title:');
        //   /*
        //     if title is enterd calendar will add title and event into fullCalendar.
        //   */
        //   if (title) {
        //     $('angular2-fullcalendar').fullCalendar('renderEvent',
        //       {
        //         title: title,
        //         start: start,
        //         end: end
        //       }
        //     );
        //   }

        //   $('angular2-fullcalendar').fullCalendar('unselect');
        // },
        events: this.events
    }
}
