import { Component } from '@angular/core';

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

  constructor() {
  }

  testCallback(event) {
    console.log('This is callback');
    console.log(event);
  }
}
