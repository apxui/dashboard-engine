import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppComponent } from '../app.component';
import { LineChartComponent } from './lineChart.component';
import { MultiLineChartComponent } from './multiLineChart.component';
import { BaseChartComponent } from './base.chart.component';

@NgModule({
	imports: [
		NgxEchartsModule
	],
	declarations: [
	 BaseChartComponent,
	 LineChartComponent,
	 MultiLineChartComponent
	],
	exports: [
	 BaseChartComponent,
	 LineChartComponent,
	 MultiLineChartComponent
	]
})
export class ChartsModule {
}