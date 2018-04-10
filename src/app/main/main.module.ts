import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';
import { GridStackModule } from '../gridstack/gridstack.module';
import { MainComponent } from './main.component';

@NgModule({
	imports: [
		BrowserModule,
		CommonModule,
		NgxEchartsModule,
		GridStackModule
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