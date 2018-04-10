import { Component, OnInit } from '@angular/core';
import { IGridStackItemResizeEvent } from '../gridstack/gridstack.types';
import { IChartConfig } from './types';
import { calcPixelsByRatio } from './utils';

const TOTAL_WIDTH: number = 12;
const DEFAULT_WIDTH: number = 4;
const DEFAULT_HEIGHT: number = 4;

@Component({
	selector: 'app-test-lucas',
	template: `
        <gridStack [w]="TOTAL_WIDTH" [animate]="true">
            <div gridStackItem *ngFor="let c of charts; let i = index"
                 [x]="calcX(i)" [y]="calcY(i)" [h]="DEFAULT_HEIGHT" [w]="DEFAULT_WIDTH" [customId]="'' + i">
	        	<echart [options]="c.options" [initOpts]="c.initOpt"></echart>
            </div>
        </gridStack>
	`
})
export class TestLucasComponent implements OnInit {
	readonly TOTAL_WIDTH: number = TOTAL_WIDTH;
	readonly DEFAULT_WIDTH: number = DEFAULT_WIDTH;
	readonly DEFAULT_HEIGHT: number = DEFAULT_HEIGHT;

	charts: IChartConfig[] = [];
	
	ngOnInit(): void {
		this.draw1();
		this.draw2();
		for (let c of this.charts) {
			c.initOpt = {
				renderer: 'svg',
				height: calcPixelsByRatio(window.innerHeight, TOTAL_WIDTH, DEFAULT_HEIGHT),
				width: calcPixelsByRatio(window.innerWidth, TOTAL_WIDTH, DEFAULT_WIDTH)
			};
		}
	}

	calcX(i: number): number {
		const rowItemCount: number = TOTAL_WIDTH / DEFAULT_WIDTH;
		return (i % rowItemCount) * DEFAULT_WIDTH;
	}

	calcY(i: number): number {
		const rowItemCount: number = TOTAL_WIDTH / DEFAULT_WIDTH;
		return Math.floor((i + 1) / rowItemCount) * DEFAULT_HEIGHT;
	}

	draw1(): void {
		this.charts.push({
			options: {
				title: {
					text: 'ECharts 入门示例'
				},
				tooltip: {},
				legend: {
					data:['销量']
				},
				xAxis: {
					data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
				},
				yAxis: {},
				series: [{
					name: '销量',
					type: 'bar',
					data: [5, 20, 36, 10, 10, 20]
				}]
			}
		});
	}

	draw2(): void {
		let data = [];

		for (let i = 0; i <= 360; i++) {
			let t = i / 180 * Math.PI;
			let r = Math.sin(2 * t) * Math.cos(2 * t);
			data.push([r, i]);
		}

		this.charts.push({
			options: {
				title: {
					text: '极坐标双数值轴'
				},
				legend: {
					data: ['line']
				},
				polar: {
					center: ['50%', '54%']
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross'
					}
				},
				angleAxis: {
					type: 'value',
					startAngle: 0
				},
				radiusAxis: {
					min: 0
				},
				series: [{
					coordinateSystem: 'polar',
					name: 'line',
					type: 'line',
					showSymbol: false,
					data: data
				}],
				animationDuration: 2000
			}
		});
	}
}