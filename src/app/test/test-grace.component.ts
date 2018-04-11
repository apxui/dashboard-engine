import { Component } from '@angular/core';
import { ChartTree } from '../chart-tree/chart-tree';
import { ChartsUtil } from '../charts/charts.util';
import { metaData, rawData, reduceSeq } from '../data/human.data';
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
				if (ct.type.indexOf(ChartType.Pie) >= 0) {
					let pieOption: any = ChartsUtil.convertChartNodeToPieNode(chartNode, ct.reduceSeq);
					this._drawChart(pieOption, ChartType.Pie);
				}
				if (ct.type.indexOf(ChartType.NestedPie) >= 0) {
					let nestedPieOption: any = ChartsUtil.convertChartNodeToNestedPieNode(chartNode, ct.reduceSeq);
					this._drawChart(nestedPieOption, ChartType.NestedPie);
				}
				if (ct.type.indexOf(ChartType.Bar) >= 0) {
					this._drawChart(ChartsUtil.convertToSimpleBarChartOption(ct.reduceSeq, chartNode, 'bar'), ChartType.Bar);
				}
				if (ct.type.indexOf(ChartType.MultiBar) >= 0) {
					this._drawChart(ChartsUtil.convertToMultiBarChartOption(ct.reduceSeq, chartNode, dimLabels[chartTypes.indexOf(ct)], 'bar'), ChartType.MultiBar);
				}
				if (ct.type.indexOf(ChartType.Line) >= 0) {
					this._drawChart(ChartsUtil.convertToSimpleBarChartOption(ct.reduceSeq, chartNode, 'line'), ChartType.Line);
				}
				if (ct.type.indexOf(ChartType.MultiLine) >= 0) {
					this._drawChart(ChartsUtil.convertToMultiBarChartOption(ct.reduceSeq, chartNode, dimLabels[chartTypes.indexOf(ct)], 'line'), ChartType.MultiLine);
				}
			})
		} else {
			this._drawChart(ChartsUtil.convertToSimpleBarChartOption([], chartNode, 'bar'), ChartType.Bar);
		}
	}

	_drawChart(option: any, type: ChartType): void {
		this.chartList.push(
			{
				chartOption: {
					option: option
				},
				chartType: type
			});
	}
}

export class ChartObject {
	chartType: ChartType;
	chartOption: any;
}