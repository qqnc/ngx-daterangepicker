import { NgxDaterangepickerModule } from 'ngx-daterangepicker';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDaterangepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
