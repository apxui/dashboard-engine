import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';

import { ChartsModule } from '../charts/charts.module';
import { GridStackModule } from '../gridstack/gridstack.module';
import { TestDavidComponent } from './test-david.component';
import { TestGraceComponent } from './test-grace.component';
import { TestLucasComponent } from './test-lucas.component';

@NgModule({
	imports: [
		BrowserModule,
		CommonModule,
		NgxEchartsModule,
		GridStackModule,
		ChartsModule
	],
	declarations: [
		TestLucasComponent,
		TestGraceComponent,
		TestDavidComponent,
	],
	exports: [
		TestLucasComponent,
		TestGraceComponent,
		TestDavidComponent
	]
})
export class TestModule {
}