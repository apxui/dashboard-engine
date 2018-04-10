import { Component } from '@angular/core';
import { ChartsUtil } from './charts/charts.util';
import { ChartTree } from './chart-tree/chart-tree';
import { rawData, metaData, reduceSeq } from './data/portfolio.data';

@Component({
	selector: 'app-root',
	template: `
        <nav class="navbar navbar-expand sticky-top navbar-dark bg-primary d-flex justify-content-between">
            <a class="navbar-brand" href="#"><i class="fas fa-tachometer-alt mr-2"></i>Dashboard Engine</a>

            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="https://github.com/apxui/dashboard-engine" target="_blank"><i class="fab fa-github fa-lg fa-fw fa-spin mr-1"></i>Follow us on GitHub</a>
                </li>
            </ul>
        </nav>
        
		<div class="container-fluid">
			<base-chart [options]="treeOption"></base-chart>
			<div  *ngFor="let d of chartList">
				<base-chart [options]="d.chartOption"></base-chart>
		</div>
		</div>
		
	`
})
export class AppComponent {
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

