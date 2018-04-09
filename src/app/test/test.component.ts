import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

@Component({
	selector: 'app-test',
	template: `
		Test
		<div echarts [options]="options"></div>
		<div echarts [options]="options2"></div>
	`
})
export class TestComponent implements OnInit {
	options: any;
	options2: any;
	
	ngOnInit(): void {

		// 指定图表的配置项和数据
		this.options = {
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
		};

		let data = [];

		for (let i = 0; i <= 360; i++) {
			let t = i / 180 * Math.PI;
			let r = Math.sin(2 * t) * Math.cos(2 * t);
			data.push([r, i]);
		}

		this.options2 = {
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
		};
	}
}