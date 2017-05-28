import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import * as moment from 'moment/moment';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-plannercalendar',
  templateUrl: './plannercalendar.component.html'
})
export class PlannerCalendarComponent implements OnInit, AfterViewInit {
  private today: String = moment().format('YYYY-MM-DD');
  submitted = false;

  constructor(private element : ElementRef) {
    this.calendarOptions['now'] = this.today;
    this.calendarOptions['defaultDate'] = this.today;
  }

  onSubmit() {
    this.submitted = true;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
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
        defaultDate: '2017-05-20',
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
        select: (start, end, allDay) => {

          /*
            after selection user will be promted for enter title for event.
          */
          let title = prompt('Event Title:');
          /*
            if title is enterd calendar will add title and event into fullCalendar.
          */
          if (title) {
            $('angular2-fullcalendar').fullCalendar('renderEvent',
              {
                title: title,
                start: start,
                end: end
              }
            );
          }

          $('angular2-fullcalendar').fullCalendar('unselect');
        },
        events: [
          {
            title: 'Jeszcze nie wiem',
            start: '2017-05-19T10:30:00',
            end: '2017-05-19T11:45:00'
          },
          {
            title: 'Długie wydarzenie do zrealizowania',
            start: '2017-05-10',
            end: '2018-12-31'
          },
           {
            title: 'Długi dzień w szkole',
            start: '2017-05-21T09:30:00',
            end: '2017-05-21T16:30:00'
          },
          {
            id: 999,
            title: 'szukanie sali',
            start: '2017-05-22T16:00:00'
          },
          {
            id: 999,
            title: 'szukanie orkiestry',
            start: '2017-05-16T16:00:00'
          },
          {
            title: 'Spotkanie w Urzędzie',
            start: '2017-05-15T10:30:00',
            end: '2017-05-15T12:30:00'
          },
          {
            title: 'Obiad',
            start: '2016-10-12T12:00:00'
          },
          {
            title: 'Spotknie z księdzem',
            start: '2018-09-12T14:30:00'
          },
          {
            title: 'Odpoczynek',
            start: '2016-09-12T17:30:00'
          },
          {
            title: 'Kolacja z rodzicami',
            start: '2016-05-12T20:00:00'
          },
          {
            title: 'Urodziny moje',
            start: '2017-05-23T07:00:00'
          },
          {
            title: 'Sprawdż stronę',
            url: 'http://www.zespoly-weselne.pl',
            start: '2016-09-29'
          },
          {
            id: 999,
            title: 'szukanie orkiestry',
            start: '2017-04-05T16:00:00'
          },
          {
            title: 'Spotkanie w Urzędzie',
            start: '2017-05-18T11:00:00',
            end: '2017-05-18T12:30:00'
          },
          {
            title: 'Obiad ze świadkową',
            start: '2017-04-30T14:00:00'
          },
          {
            title: 'Spotaknie z księdzem',
            start: '2017-05-22T15:30:00'
          },
          {
            title: 'Odpoczynek',
            start: '2017-09-12T17:45:00'
          },
          {
            title: 'Kolacja z rodzicami',
            start: '2017-05-12T20:00:00'
          },
          {
            title: 'Urodziny',
            start: '2017-09-13T07:00:00'
          },
          {
            title: 'Sprawdż stronę',
            url: 'http://www.zespoly-weselne.pl',
            start: '2017-09-28'
          }
        ]
    }
}
