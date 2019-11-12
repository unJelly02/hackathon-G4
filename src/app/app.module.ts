import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FilterComponent} from './components/filter/filter.component';
import {ReportComponent} from './components/report/report.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {
    MatNativeDateModule, MatToolbarModule, MatButtonModule,
    MatSliderModule, MatFormFieldModule, MatDividerModule, MatInputModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ModalModule} from 'ngx-bootstrap/modal';
import {LineChartComponent} from './componets/line-chart/line-chart.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
    declarations: [
        AppComponent,
        FilterComponent,
        ReportComponent,
        LineChartComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSliderModule,
        MatDividerModule,
        MatFormFieldModule,
        FormsModule,
        MatCardModule,
        MatToolbarModule,
        FlexLayoutModule,
        HttpClientModule,
        ModalModule.forRoot(),
    ],
    providers: [DatePipe],
    bootstrap: [AppComponent]
})
export class AppModule {
}
