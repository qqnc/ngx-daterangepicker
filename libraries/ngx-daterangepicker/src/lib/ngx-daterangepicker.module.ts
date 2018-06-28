import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaterangepickerComponent } from './components/daterangepicker.component';
import { CalendarComponent } from './components/calendar/calendar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DaterangepickerComponent,
    CalendarComponent],
  exports: [DaterangepickerComponent]
})
export class NgxDaterangepickerModule { }

// @NgModule({
//   declarations: [
//     DaterangepickerComponent,
//     CalendarComponent
//   ],
//   imports: [
//     CommonModule
//   ],
//   exports: [
//     DaterangepickerComponent
//   ]
// })
// export class DaterangepickerModule {
//   static forRoot(): ModuleWithProviders {
//     return {
//       ngModule: DaterangepickerModule,
//       providers: []
//     };
//   }
// }
