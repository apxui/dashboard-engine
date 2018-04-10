import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-test-lucas',
	template: `
        <gridStack
		        [w]="12"
		        [animate]="true"
        >
            <div gridStackItem
                 [x]="0" [y]="0" [h]="3" [w]="9">
            </div>
            <div gridStackItem
                 [x]="10" [y]="0" [h]="3" [w]="3">
            </div>
        </gridStack>
        <div echarts [options]="options1"></div>
        <div echarts [options]="options2"></div>
	`
})
export class TestLucasComponent implements OnInit {
	options1: any;
	options2: any;

	constructor() {
	}
	
	ngOnInit(): void {
		this.draw1();
		this.draw2();
	}

	draw1(): void {
		this.options1 = {
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
	}

	draw2(): void {
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