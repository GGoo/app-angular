import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
  selector: 'app-plannercalendar',
  templateUrl: './plannercalendar.component.html'
})
export class PlannerCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  calendarOptions:Object = {
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listWeek'
        },
        height: '600px',
        fixedWeekCount : true,
        defaultDate: '2017-04-10',
        defaultView: 'agendaWeek',
        timeFormat: 'h:mm',
        views: {
            agenda: {
              timeFormat: 'h:mm'
            }
        },
        locale: 'pl',
        businessHours: true,
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
          {
            title: 'All Day Event',
            start: '2017-03-01'
          },
          {
            title: 'Long Event',
            start: '2014-04-01',
            end: '2018-12-31'
          },
          {
            id: 999,
            title: 'szukanie sali',
            start: '2017-04-04T16:00:00'
          },
          {
            id: 999,
            title: 'szukanie orkiestry',
            start: '2016-04-05T16:00:00'
          },
          {
            title: 'Spotkanie w Urzędzie',
            start: '2017-04-10T10:30:00',
            end: '2017-04-12T12:30:00'
          },
          {
            title: 'Obiad',
            start: '2016-09-12T12:00:00'
          },
          {
            title: 'Spotaknie z księdzem',
            start: '2016-09-12T14:30:00'
          },
          {
            title: 'Odpoczynek',
            start: '2016-09-12T17:30:00'
          },
          {
            title: 'Kolacja z rodzicami',
            start: '2016-09-12T20:00:00'
          },
          {
            title: 'Urodziny',
            start: '2016-09-13T07:00:00'
          },
          {
            title: 'Sprawdż stronę',
            url: 'http://www.zespoly-weselne.pl',
            start: '2016-09-28'
          }
        ]
    }
}
