import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppComponent } from '../app.component';
import { BaseChartComponent } from './base.chart.component';

@NgModule({
	imports: [
		NgxEchartsModule
	],
	declarations: [
        BaseChartComponent
	],
	exports: [
        BaseChartComponent
	]
})
export class ChartsModule {
}