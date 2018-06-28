import * as momentNs from 'moment';
const moment = momentNs;

export class Matrix {
  today: boolean;
  off: boolean;
  available: boolean;
  active: boolean;
  inRange: boolean;
  startDate: boolean;
  endDate: boolean;
  weekend: boolean;
  disabled: boolean;
  constructor() {
    this.today = false;
    this.off = false;
    this.available = false;
    this.active = false;
    this.inRange = false;
    this.startDate = false;
    this.endDate = false;
    this.weekend = false;
    this.disabled = false;
  }
}
export class Calendar {
  month: any;
  dateHtml: string;
  calendar: Calendar;
  calendarForView: any [][];
  matrix: Matrix [][];

  constructor() {
    this.calendarForView = [];
    this.matrix = [];
    for (let row = 0; row < 6; row++) {
      this.calendarForView[row] = [];
      this.matrix[row] = [];
      for (let col = 0; col < 7; col++) {
        this.calendarForView[row][col] = moment();
        this.matrix[row][col] = new Matrix();
      }
    }
  }
}
