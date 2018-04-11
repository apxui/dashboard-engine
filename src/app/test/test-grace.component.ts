import { Component } from '@angular/core';
import { ChartTree } from '../chart-tree/chart-tree';
import { ChartsUtil } from '../charts/charts.util';
import { metaData, rawData, reduceSeq } from '../data/portfolio.data';
import { fakeBarData } from '../charts/bar.option';
import { ChartNode, TypeResult, ChartType, Property } from '../chart-tree/entity';

@Component({
	selector: 'app-test-grace',
	template: `
        <base-chart [options]="treeOption"></base-chart>
        <div *ngFor="let d of chartList">
            <base-chart [options]="d.chartOption"></base-chart>
        </div>
	`
})

export class TestGraceComponent {
	treeOption: any;
	chartList: ChartObject[] = null;
	constructor() {
		this.buildMainTree();

	}
	buildMainTree(): void {
		let mainTree: ChartTree = new ChartTree();
		let mainTreeData: any = mainTree.buildAndGetRootnode(rawData, metaData, reduceSeq);
		let mainTreeOption: any = ChartsUtil.convertToTreeOption(mainTreeData);
		console.log(mainTreeData);

		this.treeOption = {
			option: mainTreeOption,
			onTreeClickHandler: (treeNodeData: any) => {
				let node: ChartNode = mainTree.getNode(treeNodeData.uid);
				let chartTypes: TypeResult[] = mainTree.getChartTypeForNode(node);
				console.log(node);
				console.log(chartTypes);
				let dimLabels: any = [];
				chartTypes.forEach((ct: TypeResult) => {
					dimLabels.push(ct.reduceSeq.map((dim: Property) => mainTree.getAllPropertiesByDim(dim.name)));
				});
				this._createCharts(chartTypes, node, dimLabels);
			}
		};
	}
	_createCharts(chartTypes: TypeResult[], chartNode: ChartNode, dimLabels: any) {
		this.chartList = [];
		if (chartTypes && chartTypes.length > 0) {
			chartTypes.forEach((ct: TypeResult) => {
				// to-do
				if (ct.type.indexOf(ChartType.Bar) >= 0) {
					this._createBarChart(ct.reduceSeq, chartNode);
				}
				if (ct.type.indexOf(ChartType.multiBar) >= 0) {
					console.log('multibar');
					this._createMultiBarChart(ct.reduceSeq, chartNode, dimLabels[chartTypes.indexOf(ct)]);
				}
			})
		} else {
			this._createBarChart([], chartNode);
		}
	}
	_createMultiBarChart(reduceSeq: Array<Property>, chartNode: ChartNode, dimLabels: any): void {
		if (reduceSeq.length > 2) {
			console.warn('not support');
			return;
		}
		let labels: any = dimLabels;
		let title: string = reduceSeq.map((r: Property) => r.name).join(' ');
		let xAxisLabels: string[] = labels[0]; // x axis label, should be the first dimension
		let subBarLabels: string[] = labels[1];
		let barData: any = [];
		subBarLabels.forEach((sublabel: string) => {
			let subBarData: number[] = [];
			chartNode.children.forEach((node: ChartNode) => { // first dimension
				let N: ChartNode = node.children.find((N: ChartNode) => N.name === sublabel);
				subBarData.push(N ? N.value : 0);
			})
			barData.push({
				name: sublabel,
				data: subBarData
			});
		})

		this.chartList.push(
			{
				chartOption: {
					option: ChartsUtil.convertToBarOption(title, barData, xAxisLabels, subBarLabels)
				},
				chartType: 'bar'
			});
	}
	_createBarChart(reduceSeq: Array<Property>, chartNode: ChartNode): void {
		let xAxisLabels: string[] = chartNode.children.map((e: ChartNode) => e.name);
		let data: any[] = chartNode.children.map((e: ChartNode) => e.value);
		let title: string;
		let barData: any;
		if (reduceSeq && reduceSeq.length > 0) {
			title = reduceSeq[0].name;
			barData = [{
				name: reduceSeq[0].name,
				data: data
			}];
		} else {
			title = chartNode.name;
			barData = [{
				name: chartNode.name,
				data: [chartNode.value]
			}]
		}
		this.chartList.push(
			{
				chartOption: {
					option: ChartsUtil.convertToBarOption(title, barData, xAxisLabels)
				},
				chartType: 'bar'
			});
	}
}

export class ChartObject {
	chartType: string;
	chartOption: any;
}