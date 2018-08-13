import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  start1;
  end1;
  start2;
  end2;
  start3;
  end3;

  customRanges = [
    {
      text: 'Today', desc: 'Today', value: 'today',
      start: moment(),
      end: moment(),
      default: true
    },
    {
      text: 'Last 3 Months', desc: 'Last 3 Months', value: 'last3month',
      start: moment().subtract(3, 'month').startOf('month'),
      end: moment().subtract(1, 'month').endOf('month')
    },
    {
      text: 'Last 6 Month', desc: 'Last Month', value: 'lastmonth',
      start: moment().subtract(6, 'month').startOf('month'),
      end: moment().subtract(1, 'month').endOf('month')
    },
    {
      text: 'This Year', desc: 'This Year', value: 'thisyear',
      start: moment().startOf('year'),
      end: moment().endOf('year')
    },
    {
      text: 'Last Year', desc: 'Last Year', value: 'lastyear',
      start: moment().subtract(1, 'year').startOf('year'),
      end: moment().subtract(1, 'year').endOf('year')
    }
  ];

  constructor() {
  }

  testCallback(event) {
    console.log('This is callback');
    console.log(event);
  }
}
