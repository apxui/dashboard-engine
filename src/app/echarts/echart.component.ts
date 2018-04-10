import { AfterViewInit, Component, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';
declare var $: any; // jQuery
declare var echarts: any; // jQuery

@Component({
	selector: 'echart',
	styleUrls: ['./echart.component.scss'],
	template: `
		<div class="echart-container"></div>
	`
})
export class EchartComponent implements AfterViewInit {
	@Input() options: any;
	@Input() initOpts: any;

	constructor(private el: ElementRef, private renderer: Renderer2) {}

	ngAfterViewInit() {
		let nativeElement: HTMLElement = this.el.nativeElement;

		let dom = nativeElement.querySelector(".echart-container");
		let chart = echarts.init(dom, null, {
			devicePixelRatio: window.devicePixelRatio,
			renderer: this.initOpts.renderer || 'canvas',
			width: this.initOpts.width || 400,
			height: this.initOpts.height || 400
		});

		chart.setOption(this.options);
		chart.resize();
	}
}