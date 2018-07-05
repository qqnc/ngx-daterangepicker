# ngx-daterangepicker

Check [DEMO](https://qqnc.github.io/ngx-daterangepicker/)

<img src="https://s3-us-west-1.amazonaws.com/nate-public/ngx-dateranger.jpg">

## Install
```bash
npm install @nc/ngx-daterangepicker --save
```

## Configuration

Ensure you import the module and the dependencies:
In your module files. e.g. app.module.ts

```javascript

import { NgxDaterangepickerModule } from 'ngx-daterangepicker';

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

**`format`** - [**`string`**] - the format of the return.  e.g: MM-DD-YYYY.

**`minDate`** - [**`string`** | **`moment`**] - the earlist date that user can select.

**`maxDate`** - [**`string`** | **`moment`**] - the lastest date that user can select.

**`opens`** - [**`string`**] - the side of the opened calendar. options: "left" or "right".

**`pill`** - [**`boolean`**] - the style of the button.  pill button if true, input field if false.

**`ranges`** - [**`boolean`** or **`array`**] - show ranges options.  shown if true, hide if false.

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
