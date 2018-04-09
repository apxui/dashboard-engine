import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppComponent } from '../app.component';
import { TestComponent } from './test.component';

@NgModule({
	imports: [
		NgxEchartsModule
	],
	declarations: [
		TestComponent
	],
	exports: [
		TestComponent
	]
})
export class TestModule {
}