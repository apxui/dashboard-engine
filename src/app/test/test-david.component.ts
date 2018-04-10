import { Component } from '@angular/core';

import { ChartsUtil } from '../charts/charts.util';
import { LineChartOption } from '../charts/lineChart.component';
import { MultiLineChartOption } from '../charts/multiLineChart.component';

@Component({
	selector: 'app-test-david',
	template: `
		<basic-line [options]="lineOption"></basic-line>
		<multi-line [options]="multiLineOption"></multi-line>
	`
})
export class TestDavidComponent {
	lineOption: LineChartOption;
	multiLineOption: MultiLineChartOption;

	constructor() {
		this.buildLineCharts();

	}

	buildLineCharts(): void {
		this.lineOption = ChartsUtil.convertToLineOption();
		this.multiLineOption = ChartsUtil.convertToMultiLineOption();
	}
}
