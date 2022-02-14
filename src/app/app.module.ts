import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import{MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import{ FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { TimesheetModule } from './timesheet/timesheet.module';
import{HttpClientModule} from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule}from  'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    TimesheetComponent
  ],
  imports: [
    TimesheetModule,
    BrowserModule,
    AppRoutingModule,
   BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatMomentDateModule,
    Ng2SearchPipeModule,
    MatSelectModule,
    Ng2OrderModule,
    NgxPaginationModule,
    NgxMaterialTimepickerModule,
    MatTableModule

  ],
  providers: [ 
    EmployeeService,
  ],
  bootstrap: [AppComponent],

  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }