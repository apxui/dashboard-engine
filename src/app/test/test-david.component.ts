import { Component } from '@angular/core';

import { ChartsUtil } from '../charts/charts.util';
import { LineChartOption } from '../charts/lineChart.component';
import { MultiLineChartOption } from '../charts/multiLineChart.component';
import { ChartTree } from '../chart-tree/chart-tree';
import { rawData, metaData, reduceSeq } from '../data/portfolio.data';
import { ChartNode } from '../chart-tree/entity';

@Component({
	selector: 'app-test-david',
	template: `
		<base-chart [options]="treeOption"></base-chart>
		<basic-line [options]="gOption"></basic-line>
	`
})
export class TestDavidComponent {
	treeOption: any;
	gOption: any;

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
				let node: ChartNode = mainTree.getNode(treeNodeData.uid);
				console.log(node);
				let chartData: any = mainTree.getChartTypeForNode(node);
				console.log(JSON.stringify(chartData));

				let index: number = 0
				chartData.forEach((e: any) => {
					let chartType: number = e.type.find((t: any) => {
						return t === 2;
					});
					if(chartType && e.reduceSeq.length === 1) {
						this.buildPieCharts(node, chartData, index);
					}

					index++;
				});
			}
		};
	}

	buildPieCharts(node: ChartNode, chartData: any, index): void {
		let legendData: Array<any> = [];
		let seriesData: Array<any> = [];
		node.children.forEach((e: any) => {
			legendData.push(e.name);
			seriesData.push({value: e.value, name: e.name});
		});

		let option: any = {
			title : {
				text: chartData[0].reduceSeq[index].name,
				subtext: '',
				x:'center'
			},
            tooltip : {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: legendData
            },
            series : [
                {
                    name: chartData[0].reduceSeq[index].name,
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data: seriesData,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
		};
		
		this.gOption = option;
	}
}
