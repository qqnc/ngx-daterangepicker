# ngx-daterangepicker

Check [DEMO](https://qqnc.github.io/ngx-daterangepicker/)

<img src="https://s3-us-west-1.amazonaws.com/nate-public/ngx-dateranger.jpg">

## Install
```bash
npm install @qqnc/ngx-daterangepicker --save
```

## Configuration

Ensure you import the module and the dependencies:
In your module files. e.g. app.module.ts

```javascript

import { NgxDaterangepickerModule } from '@qqnc/ngx-daterangepicker';

@NgModule({
   imports: [
      BrowserModule,
      NgxDaterangepickerModule

       ...OtherModules 
   ] // along with your other modules
})
export class AppModule {}
```

Declare in your html

```html

<lib-daterangepicker [(start)]="start" [(end)]="end" format="MM-DD-YYYY" opens="left" [pill]="true"></lib-daterangepicker>

```

#### Properties

**`start`** - [(**`string`** | **`moment`**)] - two-way binding variable of the start date.  It will also return when you apply.

**`end`** - [(**`string`** | **`moment`**)] - two-way binding variable of the end date. It will also return when you apply.

#### Properties (optional)

**`format`** - [**`string`**] - the format of the input.  e.g: MM-DD-YYYY.

**`outputFormat`** - [**`string`**] - the format of the return.  e.g: MM-DD-YYYY.

**`minDate`** - [**`string`** | **`moment`**] - the earlist date that user can select.

**`maxDate`** - [**`string`** | **`moment`**] - the lastest date that user can select.

**`opens`** - [**`string`**] - the side of the opened calendar. options: "left" or "right".

**`pill`** - [**`boolean`**] - the style of the button.  pill button if true, input field if false.

**`ranges`** - [**`boolean`** or **`array`**] - show ranges options.  shown if true, hide if false.

**`complete`** - (**`function`**) - the callback after selection. e.g: (complete)="testCallback($event)". $event will return { start: , **`string`**, end: **`string`** }



#### Custom Ranges

import the moment.js

```
import * as moment from 'moment';
```

Define the custom range menu

```
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
```

Bind it with ranges

```
[ranges]="customRanges"
```

Check the example in DEMO page

## Run demo in development environment

Fork, code, and build it, then run demo.

## Build the library

run `npm run build`

## Test the library in demo

run `npm run serve:demo` for a demo server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History
