import { Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  AfterContentChecked,
  AfterViewChecked,
  EventEmitter,
  Input,
  Output,
  OnChanges
} from '@angular/core';
import * as momentNs from 'moment';
const moment = momentNs;

@Component({
  selector: 'lib-daterangepicker',
  templateUrl: './daterangepicker.component.html',
  styleUrls: ['./daterangepicker.component.scss']
})
export class DaterangepickerComponent implements OnInit, AfterViewInit, AfterViewChecked, OnChanges {
  show: boolean;
  menuTop: number;
  menuLeft: number;
  dateStr: string;
  title: string;
  activeItem = 'Today';
  showCalendar: boolean;
  trigger: boolean;
  startDate: momentNs.Moment;
  endDate: momentNs.Moment;

  // Input attributes
  @Input() opens = 'left';
  @Input() start: momentNs.Moment;
  @Input() end: momentNs.Moment;
  @Input() outputFormat;
  @Input() format = 'MM/DD/YYYY';
  @Input() minDate: momentNs.Moment | string;
  @Input() maxDate: momentNs.Moment | string;
  @Input() pill = false;
  @Input() ranges: boolean | object;

  // End of Input attributes
  @Output() startChange = new EventEmitter();
  @Output() endChange = new EventEmitter();
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() complete: EventEmitter<any> = new EventEmitter();
  @ViewChild('cEl') cEl: ElementRef;
  @ViewChild('pickerElement') el: ElementRef;
  constructor() {
    this.show = false;
    this.showCalendar = false;
  }

  ngOnInit() {
    // default range is true
    if (typeof this.ranges === 'undefined') {
      this.ranges = [
        {
          text: 'Today', desc: 'Today', value: 'today',
          start: moment(),
          end: moment(),
          default: true
        },
        {
          text: 'Yesterday', desc: 'Yesterday', value: 'yesterday',
          start: moment().subtract(1, 'days'),
          end: moment().subtract(1, 'days'),
        },
        {
          text: 'Last 7 Days', desc: 'Last 7 Days', value: 'last7days',
          start: moment().subtract(6, 'days'),
          end: moment().subtract(1, 'days')
        },
        {
          text: 'Last 30 Days', desc: 'Last 30 Days', value: 'last30days',
          start: moment().subtract(29, 'days'),
          end: moment()
        },
        {
          text: 'This Month', desc: 'This Month', value: 'thismonth',
          start: moment().startOf('month'),
          end: moment().endOf('month')
        },
        {
          text: 'Last Month', desc: 'Last Month', value: 'lastmonth',
          start: moment().subtract(1, 'month').startOf('month'),
          end: moment().subtract(1, 'month').endOf('month')
        }
      ];
    }

    // default pill is false
    if (typeof this.pill !== 'boolean') {
      this.pill = false;
    }
    if (typeof this.start === 'string') {
      this.startDate = moment(this.start, this.format);
    }

    if (typeof this.end === 'string') {
      this.endDate = moment(this.end, this.format);
    }

    // if start not given
    if (typeof this.start === 'undefined') {
      this.startDate = moment();
    }

    // if end not given
    if (typeof this.end === 'undefined') {
      this.startDate = moment();
    }

    // check if it's object before check if it's string
    if (typeof this.minDate === 'object') {
      this.minDate = moment(this.minDate);
    }
    // check if it's object before check if it's string
    if (typeof this.maxDate === 'object') {
      this.maxDate = moment(this.maxDate);
    }

    if (typeof this.minDate === 'string' ) {
      this.minDate = moment(this.minDate, this.format);
    }

    if (typeof this.maxDate === 'string') {
      this.maxDate = moment(this.maxDate, this.format);
    }

    if (!this.pill && this.outputFormat) {
      this.outputFormat = 'YYYY-MM-DD';
    } else {
      this.outputFormat = 'MMM D';
    }
  }

  selectRange(range: any) {
    if (range) {
      this.activeItem = range.text;
      this.startDate = range.start;
      this.endDate = range.end;

      this.renderText(this.startDate, this.endDate);
      this.emitResult();
    }
  }

  setCurrent() {
    if (this.ranges) {
      this.selectRange(this.ranges[0]);
    } else {
      // this.start = moment();
      // this.end = moment();
      this.renderText(this.start, this.end);
      this.emitResult();
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.setCurrent();
    }, 0);
  }

  ngAfterViewChecked() {}

  toggleMenu() {
    setTimeout(() => {
    this.menuTop = this.el.nativeElement.offsetTop + 50;
    this.menuLeft = this.el.nativeElement.offsetLeft;
    this.show = !this.show;
    if (this.ranges && this.showCalendar) {
      this.menuLeft += 556;
      this.showCalendar = !this.showCalendar;
    } else if (!this.ranges) {
      this.showCalendar = true;
    }

    }, 0);
  }
  renderText(start: momentNs.Moment, end: momentNs.Moment) {
    if (start && end) {
      const period = +end - +start;
      const diff = +moment() - +start;
      setTimeout(() => {
        if (period < 100 && diff < 86400000) {
          this.title = 'Today: ';
          this.dateStr = start.format(this.outputFormat);
        } else if (period < 100 && diff >= 86400000) {
          this.title = 'Yesterday: ';
          this.dateStr = start.format(this.outputFormat);
        } else {
          this.title = '';
          this.dateStr = start.format(this.outputFormat) + ' - ' + end.format(this.outputFormat);
        }
      }, 0);
    }
  }

  triggerCalendar() {
    this.activeItem = 'Custom Range';
    setTimeout(() => {
      if (this.showCalendar && this.opens === 'left') {
        this.menuLeft += 556;
      } else if (this.opens === 'left') {
        this.menuLeft -= 556;
      }
      this.showCalendar = !this.showCalendar;
    }, 0);
  }

  apply() {
    this.trigger = !this.trigger;
    this.toggleMenu();
  }

  closeMenu() {
    setTimeout(() => {
      this.show = false;
    }, 0);
  }
  detected(event: any) {
    this.startDate = event.start;
    this.endDate = event.end;
    this.emitResult();
    this.renderText(this.startDate, this.endDate);
    this.closeMenu();
    // console.log(event);
  }

  emitResult() {
    setTimeout(() => {
      // Return value
      if (this.startDate && this.endDate) {
        this.start = this.startDate;
        this.end = this.endDate;
        this.startChange.emit(this.start.format(this.outputFormat)); // this is to calendar
        this.endChange.emit(this.end.format(this.outputFormat)); // this is to calendar
        this.complete.emit({ start: this.start.format(this.outputFormat), end: this.end.format(this.outputFormat)});
      }
    }, 0);
  }

  ngOnChanges(changes: any) {
    // console.log(changes);
  }
}
