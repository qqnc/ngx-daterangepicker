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
  selector: 'app-daterangepicker',
  templateUrl: './daterangepicker.component.html',
  styleUrls: ['./daterangepicker.component.scss']
})
export class DaterangepickerComponent implements OnInit, AfterViewInit, AfterViewChecked, OnChanges {
  show: boolean;
  menuTop: any;
  menuLeft: any;
  dateStr: string;
  ranges: any;
  title: string;
  currentStart: any;
  currentEnd: any;
  activeItem = 'Today';
  showCalendar: boolean;
  trigger: boolean;

  @Input() start: any;
  @Input() end: any;
  @Input() format = 'MM/DD/YYYY';
  @Output() startChange = new EventEmitter();
  @Output() endChange = new EventEmitter();
  @Output() open: EventEmitter<any> = new EventEmitter();
  @ViewChild('cEl') cEl: ElementRef;
  @ViewChild('pickerElement') el: ElementRef;
  constructor() {
    this.show = false;
    this.showCalendar = false;
    // this.menuTop = this.el.nativeElement.offsetTop;
    // this.menuLeft = this.el.nativeElement.offsetLeft;
  }

  ngOnInit() {
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


  ngAfterViewInit() {
    setTimeout(() => {
      this.selectRange(this.ranges[0]);
    }, 0);
  }

  ngAfterViewChecked() {
    // this.menuTop = this.el.nativeElement.offsetTop + 50;
    // this.menuLeft = this.el.nativeElement.offsetLeft;
  }

  toggleMenu() {
    setTimeout(() => {
      this.menuTop = this.el.nativeElement.offsetTop + 50;
      this.menuLeft = this.el.nativeElement.offsetLeft;
      this.show = !this.show;
      if (this.showCalendar) {
        this.menuLeft += 556;
        this.showCalendar = !this.showCalendar;
      }
    }, 0);
  }
  renderText(start: any, end: any) {
    if (start && end) {
      setTimeout(() => {
        this.title = '';
        this.dateStr = start.format('MMM D') + ' - ' + end.format('MMM D');
      }, 0);
    }
  }

  selectRange(range: any) {
    this.activeItem = range.text;
    this.currentStart = range.start;
    this.currentEnd = range.end;
    if ((this.currentEnd - this.currentStart) < 100 && range.text === 'Today') {
      this.title = 'Today:';
      this.dateStr = this.currentStart.format('MMM D');
    } else if (range.text === 'Yesterday') {
      setTimeout(() => {
        this.title = 'Yesterday:';
        this.dateStr = this.currentStart.format('MMM D');
      }, 0);
    } else {
      setTimeout(() => {
        this.title = '';
        this.dateStr = this.currentStart.format('MMM D') + ' - ' + this.currentEnd.format('MMM D');
      }, 0);
    }

    this.emitResult();
  }

  triggerCalendar() {
    this.activeItem = 'Custom Range';
    setTimeout(() => {
      if (this.showCalendar) {
        this.menuLeft += 556;
      } else {
        this.menuLeft -= 556;
      }
      this.showCalendar = !this.showCalendar;
    }, 0);
  }

  apply() {
    this.trigger = !this.trigger;
    this.toggleMenu();
  }
  detected(event: any) {
    this.currentStart = event.start;
    this.currentEnd = event.end;
    this.emitResult();
    this.renderText(this.currentStart, this.currentEnd);
    // console.log(event);
  }

  emitResult() {
    setTimeout(() => {
      if (this.currentStart) {
        this.start = this.currentStart.format(this.format);
      }
      if (this.currentEnd) {
        this.end = this.currentEnd.format(this.format);
      }
      this.startChange.emit(this.start);
      this.endChange.emit(this.end);
    }, 0);
  }

  ngOnChanges(changes: any) {
    // console.log(changes);
  }
}
