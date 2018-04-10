import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppComponent } from '../app.component';
import { TreeComponent } from './tree.component';

@NgModule({
	imports: [
		NgxEchartsModule
	],
	declarations: [
        TreeComponent
	],
	exports: [
        TreeComponent
	]
})
export class ChartsModule {
}