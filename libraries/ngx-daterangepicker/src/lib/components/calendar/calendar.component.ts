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
  }

  initCalendar() {
    this.leftCalendar = new Calendar();
    this.rightCalendar = new Calendar();
  }

  clearCalendarFlags(side: string) {
    const calendar = side === 'left' ? this.leftCalendar : this.rightCalendar;

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
      this.renderCalendar('left');
      this.renderCalendar('right');
    }
  }

  clickDate(m: any) {
    if (!this.selecting) {
      this.setStart(m);
      this.setEnd(m);
    } else {

    }

    this.selecting = !this.selecting;
  }

  hoverDate(m: any) {
    if (!this.selecting) {
      this.tempStart = m;
      this.startStr = this.tempStart.format('MM/DD/YYYY');
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
    this.renderCalendar('left');
    this.renderCalendar('right');
  }

  clickNext() {
    this.leftCalendar.month.add(1, 'month');
    this.rightCalendar.month.add(1, 'month');
    this.clearCalendarFlags('left');
    this.clearCalendarFlags('right');
    this.renderCalendar('left');
    this.renderCalendar('right');
  }

  renderCalendar(side: string) {
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
    // console.log(calendar.calendarForView);
    // populate the calendar with date objects
    let startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;

    if (startDay > daysInLastMonth) {
      startDay -= 7;
    }

    if (dayOfWeek === this.locale.firstDay) {
      startDay = daysInLastMonth - 6;
    }

    let curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]);
    // console.log('current date');
    // console.log(curDate);
    let col = 0, row = 0;
    for (let i = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {
      if (i > 0 && col % 7 === 0) {
          col = 0;
          row++;
      }
      // console.log('set row: ' + row + ', col: ' + col);

      calendar.calendarForView[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
      // console.log(calendar.calendarForView[row][col].date());

      curDate.hour(12);

      // if (this.minDate &&
      //     calendar[row][col].format('YYYY-MM-DD') === this.minDate.format('YYYY-MM-DD') &&
      //     calendar[row][col].isBefore(this.minDate) && side == 'left') {
      //     calendar[row][col] = this.minDate.clone();
      // }

      // if (this.maxDate &&
      //      calendar[row][col].format('YYYY-MM-DD') == this.maxDate.format('YYYY-MM-DD') &&
      //      calendar[row][col].isAfter(this.maxDate) && side == 'right') {
      //     calendar[row][col] = this.maxDate.clone();
      // }
    }
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        if (calendar.calendarForView[i][j].isSame(new Date(), 'day')) {
          calendar.matrix[i][j].today = true;
        }

        if (row >= 1 && (calendar.calendarForView[i][j].month() !== calendar.calendarForView[1][1].month())) {
          calendar.matrix[i][j].off = true;
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
          // console.log('This is in range: ' + calendar.calendarForView[i][j].format('MM/DD/YYYY'));
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
