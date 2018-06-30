import { Calendar, Matrix } from './../../models/calendar.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as momentNs from 'moment';
const moment = momentNs;

@Component({
  selector: 'lib-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Output() apply: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  @Input() ranges: any;
  @Input() minDate: momentNs.Moment;
  @Input() maxDate: momentNs.Moment;

  private _start: momentNs.Moment;
  private _end: momentNs.Moment;
  private _triggered: any;
  leftCalendar: Calendar;
  rightCalendar: Calendar;
  locale: any;

  // currentMonth;
  // currentYear;
  dateHtml: string;
  today: boolean [][];
  startStr: string;
  endStr: string;
  selecting: boolean;
  tempStart: any;
  showPrev = true;
  showAfter = true;

  constructor() {
    this.selecting = false;
    this.leftCalendar = new Calendar();
    this.rightCalendar = new Calendar();
    // console.log(this.leftCalendar.calendarForView);
    this.locale = {
      direction: 'ltr',
      format: moment.localeData().longDateFormat('L'),
      separator: ' - ',
      applyLabel: 'Apply',
      cancelLabel: 'Cancel',
      weekLabel: 'W',
      customRangeLabel: 'Custom Range',
      daysOfWeek: moment.weekdaysMin(),
      monthNames: moment.monthsShort(),
      firstDay: moment.localeData().firstDayOfWeek()
    };
  }

  ngOnInit() {

    console.log('min: ' + this.minDate.format('MM/DD/YYYY'));
    console.log('max: ' + this.maxDate.format('MM/DD/YYYY'));

  }

  initCalendar() {
    this.leftCalendar = new Calendar();
    this.rightCalendar = new Calendar();
  }

  clearCalendarFlags(side: string) {
    const calendar = side === 'left' ? this.leftCalendar : this.rightCalendar;
    this.showPrev = true;
    this.showAfter = true;
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 7; col++) {
        calendar.matrix[row][col] = new Matrix();
      }
    }
  }
  updateMonth() {
    if (this.start && this.end) {
      this.initCalendar();
      if (this.end.month() !== this.start.month() || this.end.year() !== this.start.year()) {
        // this.rightCalendar.month = this.end.clone().date(2);
        this.rightCalendar.month = this.start.clone().date(2).add(1, 'month');
      } else {
        this.rightCalendar.month = this.start.clone().date(2).add(1, 'month');
      }
      this.leftCalendar.month = this.start.clone().date(2);
      this.updateCalendar('left');
      this.updateCalendar('right');
    }
  }
  updateCalendar(side: string) {
    const calendar = side === 'left' ? this.leftCalendar : this.rightCalendar;
    const month = calendar.month.month();
    const year = calendar.month.year();
    const hour = calendar.month.hour();
    const minute = calendar.month.minute();
    const second = calendar.month.second();
    const daysInMonth = moment([year, month]).daysInMonth();
    const firstDay = moment([year, month, 1]);
    const lastDay = moment([year, month, daysInMonth]);
    const lastMonth = moment(firstDay).subtract(1, 'month').month();
    const lastYear = moment(firstDay).subtract(1, 'month').year();
    const daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
    const dayOfWeek = firstDay.day();

    calendar.calendarForView = [];
    calendar.calendarForView['firstDay'] = firstDay;
    calendar.calendarForView['lastDay'] = lastDay;
    for (let i = 0; i < 6; i++) {
      calendar.calendarForView[i] = [];
    }
    // populate the calendar with date objects
    let startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;

    if (startDay > daysInLastMonth) {
      startDay -= 7;
    }

    if (dayOfWeek === this.locale.firstDay) {
      startDay = daysInLastMonth - 6;
    }

    let curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]);
    let col = 0, row = 0;
    for (let i = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {
      if (i > 0 && col % 7 === 0) {
          col = 0;
          row++;
      }

      calendar.calendarForView[row][col] = curDate.clone().hour(hour).minute(minute).second(second);

      curDate.hour(12);
    }
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        if (calendar.calendarForView[i][j].isSame(new Date(), 'day')) {
          calendar.matrix[i][j].today = true;
        }

        if (row >= 1 && (calendar.calendarForView[i][j].month() !== calendar.calendarForView[1][1].month())) {
          calendar.matrix[i][j].off = true;
        }

        if (this.minDate &&
            calendar.calendarForView[i][j].isBefore(this.minDate) &&
            side === 'left') {
          calendar.matrix[i][j].off = true;
          this.showPrev = false;
        }

        if (this.maxDate &&
          calendar.calendarForView[i][j].isAfter(this.maxDate) && side === 'right') {
          calendar.matrix[i][j].off = true;
          this.showAfter = false;
        }
        if (calendar.calendarForView[i][j].format('YYYY-MM-DD') === this.start.format('YYYY-MM-DD')) {
          calendar.matrix[i][j].active = true;
          calendar.matrix[i][j].startDate = true;
        }

        // highlight the currently selected end date
        if (this.end != null && calendar.calendarForView[i][j].format('YYYY-MM-DD') === this.end.format('YYYY-MM-DD')) {
          calendar.matrix[i][j].active = true;
          calendar.matrix[i][j].endDate = true;
        }

        // highlight dates in-between the selected dates
        if (this.end != null && calendar.calendarForView[i][j] > this.start &&
          calendar.calendarForView[i][j] < this.end ) {
          calendar.matrix[i][j].inRange = true;
        }

        if (!calendar.matrix[i][j].disabled) {
          calendar.matrix[i][j].available = true;
        }
        if ( calendar.calendarForView[i][j].isoWeekday() > 5) {
          calendar.matrix[i][j].weekend = true;
        }
      }
    }

    calendar.dateHtml = this.locale.monthNames[calendar.calendarForView[1][1].month()] + calendar.calendarForView[1][1].format(' YYYY');
  }

  clickDate(m: momentNs.Moment) {
    if (!this.selecting) {
      if (this.minDate && m.isBefore(this.minDate)) {
        console.log('out of range');
      } else if (this.maxDate && m.isAfter(this.maxDate)) {
        console.log('out of range');
      } else {
        this.setStart(m);
        this.setEnd(m);
      }
    } else {
    }

    this.selecting = !this.selecting;
  }

  hoverDate(m: any) {
    if (!this.selecting) {
      if (this.minDate && m.isBefore(this.minDate)) {
        console.log('out of range');
      } else if (this.maxDate && m.isAfter(this.maxDate)) {
        console.log('out of range');
      } else {
        this.tempStart = m;
        this.startStr = this.tempStart.format('MM/DD/YYYY');
      }
    } else {
      if ( m > this._start) {
        this.setEnd(m);
      }
    }
  }

  hoverOut() {
    this.startStr = this._start.format('MM/DD/YYYY');
  }

  clickPrev() {
    this.leftCalendar.month.subtract(1, 'month');
    this.rightCalendar.month.subtract(1, 'month');
    this.clearCalendarFlags('left');
    this.clearCalendarFlags('right');
    this.updateCalendar('left');
    this.updateCalendar('right');
  }

  clickNext() {
    this.leftCalendar.month.add(1, 'month');
    this.rightCalendar.month.add(1, 'month');
    this.clearCalendarFlags('left');
    this.clearCalendarFlags('right');
    this.updateCalendar('left');
    this.updateCalendar('right');
  }

  onApply() {
    this.apply.emit({start: this._start, end: this._end});
  }

  onCancel() {
    this.cancel.emit();
  }

  @Input()
  set start(start: any) {
    this.setStart(start);
  }

  get start() {
    return this._start;
  }

  setStart(start: any) {
    this._start = start;
    if (start) {
      this.startStr = start.format('MM/DD/YYYY');
    }
    setTimeout( () => {
      this.updateMonth();
    }, 100);
  }

  @Input()
  set end(end: any) {
    this.setEnd(end);
  }

  get end() {
    return this._end;
  }

  setEnd(end: any) {
    this._end = end;
    if (end) {
      this.endStr = end.format('MM/DD/YYYY');
    }

    setTimeout(
      () => {
        this.updateMonth();
      }, 100
    );
  }

  @Input()
  set triggered(trigger) {
    this.apply.emit({start: this._start, end: this._end});
    this._triggered = trigger;
  }

  get triggered() {
    return this._triggered;
  }
}
