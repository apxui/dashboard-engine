import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartsModule } from '../charts/charts.module';
import { EchartsModule } from '../echarts/echarts.module';
import { GridStackModule } from '../gridstack/gridstack.module';
import { WizardModule } from '../wizard/wizard.module';
import { MainComponent } from './main.component';

@NgModule({
	imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		NgxEchartsModule,
		EchartsModule,
		GridStackModule,
		WizardModule,
		ChartsModule
	],
	declarations: [
		MainComponent
	],
	exports: [
		MainComponent
	]
})
export class MainModule {

}