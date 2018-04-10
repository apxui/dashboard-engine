import { Component } from '@angular/core';
import { ChartTree } from '../chart-tree/chart-tree';
import { ChartsUtil } from '../charts/charts.util';
import { metaData, rawData, reduceSeq } from '../data/portfolio.data';

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
		this.treeOption = {
			option: mainTreeOption,
			onTreeClickHandler: (treeNodeData: any) => {
				console.log(treeNodeData);
				this._createBarChart();
			}
		};
	}
	_createBarChart(): void {
		if (!this.chartList) {
			this.chartList = [];
		}
		this.chartList.push(
			{
				chartOption: {
					option: ChartsUtil.convertToBarOption(null)
				},
				chartType: 'bar'
			});
	}
}

export class ChartObject {
	chartType: string;
	chartOption: any;
}
