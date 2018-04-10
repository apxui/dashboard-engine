import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { GridStackModule } from '../gridstack/gridstack.module';
import { TestComponent } from './test.component';

@NgModule({
	imports: [
		NgxEchartsModule,
		GridStackModule
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