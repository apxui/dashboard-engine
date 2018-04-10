import { Component } from '@angular/core';

import { ChartsUtil } from '../charts/charts.util';
import { LineChartOption } from '../charts/lineChart.component';
import { MultiLineChartOption } from '../charts/multiLineChart.component';
import { ChartTree } from '../chart-tree/chart-tree';
import { rawData, metaData, reduceSeq } from '../data/portfolio.data';

@Component({
	selector: 'app-test-david',
	template: `
		<base-chart [options]="treeOption"></base-chart>
		<basic-line [options]="lineOption"></basic-line>
	`
})
export class TestDavidComponent {
	treeOption: any;
	lineOption: LineChartOption;

	constructor() {
		this.buildMainTree();
	}

	buildMainTree(): void {
		let mainTree: ChartTree = new ChartTree();
		let mainTreeData: any = mainTree.buildAndGetRootnode(rawData, metaData, reduceSeq);

		let mainTreeOption: any = ChartsUtil.convertToTreeOption(mainTreeData);
		this.treeOption = {
			option: mainTreeOption,
			onTreeClickHandler: (treeNodeData: any) => {
				console.log(treeNodeData);
				this.buildPieCharts(treeNodeData);
			}
		};
	}

	buildPieCharts(treeNodeData): void {
		this.lineOption = ChartsUtil.convertChartNodeToNestedPieNode(treeNodeData);
	}
}
