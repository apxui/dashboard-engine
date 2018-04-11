import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SupportedEntities } from '../main/main.constants';
import { WizardService } from './wizard.service';

@Component({
	selector: 'app-wizard',
	styleUrls: ['./wizard.component.scss'],
	template: `
		<div>
            <div class="sticky-top px-3 pt-3 pb-1" style="background-color: white;">
                <h6>Let's begin with a survey :)</h6>
            </div>
            <div class="px-3 pt-1 pb-3">
                <div class="mb-2" *ngFor="let e of supportedEntities">
                    <button class="entity-button btn btn-outline-secondary" (click)="onChooseEntity(e)">{{e}}</button>
                </div>
            </div>
		</div>
		<div class="action-buttons px-3 pb-3 pt-1">
            <button type="button" class="action-button btn btn-primary mb-1" (click)="onRun()">Run</button>
            <button type="button" class="action-button btn btn-secondary mb-3" (click)="onRunNew()">Run in new tab</button>
            <button type="button" class="action-button btn btn-outline-danger" (click)="onCloseAll()">Close all tabs</button>
		</div>
	`
})
export class WizardComponent {

	@Output() run: EventEmitter<any> = new EventEmitter<any>();
	@Output() runNew: EventEmitter<any> = new EventEmitter<any>();
	@Output() closeAll: EventEmitter<any> = new EventEmitter<any>();

	readonly supportedEntities: string[] = SupportedEntities.ALL;

	entity: string;
	pivotVField: string;
	otherFields: string[];

	constructor(private wizardService: WizardService) {

	}

	onChooseEntity(entity: string): void {

	}

	onRun(): void {
		this.run.emit({
			entity: this.entity,
			treeOptions: null,
			chartOptions: this.options()
		});
	}

	onRunNew(): void {
		this.runNew.emit({
			entity: this.entity,
			treeOptions: null,
			chartOptions: this.options()
		});
	}

	onCloseAll(): void {
		this.closeAll.emit();
	}

	options(): any[] {
		let data = [];

		for (let i = 0; i <= 360; i++) {
			let t = i / 180 * Math.PI;
			let r = Math.sin(2 * t) * Math.cos(2 * t);
			data.push([r, i]);
		}

		const fake: any[] = [
			{
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
			},
			{
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
		];

		return fake;
	}
}