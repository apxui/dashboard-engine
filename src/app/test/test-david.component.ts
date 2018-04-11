import { Component } from '@angular/core';

import { ChartsUtil } from '../charts/charts.util';
import { LineChartOption } from '../charts/lineChart.component';
import { MultiLineChartOption } from '../charts/multiLineChart.component';
import { ChartTree } from '../chart-tree/chart-tree';
import { rawData, metaData, reduceSeq, pivotValues } from '../data/human.data';
import { ChartNode, Property } from '../chart-tree/entity';

@Component({
	selector: 'app-test-david',
	template: `
		<base-chart [options]="treeOption"></base-chart>
		<basic-line [options]="gOption"></basic-line>
		<basic-line [options]="pOption"></basic-line>
	`
})
export class TestDavidComponent {
	treeOption: any;
	gOption: any;
	pOption: any;

	constructor() {
		this.buildMainTree();
	}

	buildMainTree(): void {
		let mainTree: ChartTree = new ChartTree();
		let mainTreeData: any = mainTree.buildAndGetRootnode(rawData, metaData, reduceSeq, pivotValues);
		let mainTreeOption: any = ChartsUtil.convertToTreeOption(mainTreeData);
		this.treeOption = {
			option: mainTreeOption,
			onTreeClickHandler: (treeNodeData: any) => {
				let node: ChartNode = mainTree.getNode(treeNodeData.uid);
				console.log(node);
				let chartData: any = mainTree.getChartTypeForNode(node);
				console.log(JSON.stringify(chartData));

				chartData.forEach((e: any) => {
					let chartType: number = e.type.forEach((t: any) => {
						if (t === 2) {
							this.buildPieCharts(node, e.reduceSeq);
						}
						else if(t === 3 || t === 1) {
							// line/bar chart
							
						}
						else if(t === 6) {
							// multiLine/multiBar bar
							this.buildNestedPieCharts(node, e.reduceSeq);
						}
						else if (t === 8) {
							this.buildRadarCharts(node, e.reduceSeq);
						}
					});
				});
			}
		};
	}

	buildPieCharts(node: ChartNode, reduceSeqData: Array<Property>): void {
		this.gOption = ChartsUtil.convertChartNodeToPieNode(node, reduceSeqData);
	}

	buildNestedPieCharts(node: ChartNode, reduceSeqData: Array<Property>): void {
		this.pOption = ChartsUtil.convertChartNodeToNestedPieNode(node, reduceSeqData);
	}

	buildRadarCharts(node: ChartNode, reduceSeqData: Array<Property>): void {
		this.pOption = ChartsUtil.convertChartNodeToRadarChartNode(node, null);
	}
}
