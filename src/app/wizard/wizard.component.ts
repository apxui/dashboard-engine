import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Dimension } from '../chart-tree/entity';
import { metaData as humanMeta, rawData as humanData } from '../data/human.data';
import { metaData as portfolioMeta, rawData as portfolioData } from '../data/portfolio.data';
import { SupportedEntities } from '../main/main.constants';
import { WizardService } from './wizard.service';

@Component({
	selector: 'app-wizard',
	styleUrls: ['./wizard.component.scss'],
	template: `
        <div class="wizard-top px-3 pt-3 pb-1" style="background-color: white; border-bottom: 1px solid #dee2e6;">
            <h6 class="text-info">Let's begin with a survey :)</h6>
        </div>
        <div class="wizard-body px-3 py-3">
            <div class="form-group mb-4">
                <h6>Which data are you interested in?</h6>
                <select class="form-control" [(ngModel)]="selectedEntity" (ngModelChange)="onSelectEntity($event)">
                    <option *ngFor="let e of supportedEntities" [value]="e">{{e}}</option>
                </select>
            </div>
            <div class="form-group mb-4" *ngIf="allVFields.length > 0">
                <h6>Which values do you care the most?</h6>
	            <div class="row pl-2">
                    <div class="form-check col-sm-6" *ngFor="let vf of allVFields">
                        <input class="form-check-input" type="checkbox" (click)="onSelectVField(vf.name)">
                        <label class="form-check-label">{{vf.name}}</label>
                    </div>
	            </div>
            </div>
            <div class="form-group mb-4" *ngIf="allOtherFields.length > 0">
                <h6>How would you put these fields in order?</h6>
                <div class="row pl-2">
	                <div class="form-check col-sm-6" *ngFor="let vf of allOtherFields">
	                    <input class="form-check-input" type="checkbox" (click)="onSelectOtherFields(vf.name)">
	                    <label class="form-check-label">{{vf.name}}</label>
	                </div>
                </div>
            </div>
        </div>
        <div class="wizard-bottom px-3 pb-3 pt-3" style="background-color: white; border-top: 1px solid #dee2e6;">
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

	selectedEntity: string = SupportedEntities.Humans;
	selectedVFields: string[] = [];
	selectedOtherFields: string[] = [];

	allVFields: {name: string, dimension: Dimension}[] = [];
	allTFields: {name: string, dimension: Dimension}[] = [];
	allPFields: {name: string, dimension: Dimension}[] = [];
	allOtherFields: {name: string, dimension: Dimension}[] = [];

	meta: any[];
	data: any[];

	constructor() {
		this.loadData();
	}

	onSelectEntity(entity: string): void {
		this.selectedEntity = entity;
		this.selectedVFields = [];
		this.selectedOtherFields = [];
		this.loadData();
	}

	onSelectVField(field: string): void {
		const index: number = this.selectedVFields.indexOf(field);
		if (index === -1) {
			this.selectedVFields.push(field);
		} else {
			this.selectedVFields.splice(index, 1);
		}
		this.updateOtherFields();
	}

	onSelectOtherFields(field: string): void {
		const index: number = this.selectedOtherFields.indexOf(field);
		if (index === -1) {
			this.selectedOtherFields.push(field);
		} else {
			this.selectedOtherFields.splice(index, 1);
		}
	}

	updateOtherFields(): void {
		const otherV: {name: string, dimension: Dimension}[] = this.allVFields.filter(vf => this.selectedVFields.indexOf(vf.name) === -1);
		this.allOtherFields = [...this.allTFields, ...this.allPFields, ...otherV];
	}

	loadData(): void {
		this.allVFields = [];
		this.allTFields = [];
		this.allPFields = [];
		this.allOtherFields = [];

		let meta: any[];
		let data: any[];
		switch (this.selectedEntity) {
			case SupportedEntities.Humans: {
				meta = humanMeta;
				data = humanData;
				break;
			}
			case SupportedEntities.Portfolios: {
				meta = portfolioMeta;
				data = portfolioData;
				break;
			}
			default:
		}

		if (meta) {
			this.allVFields = meta.filter(md => md.dimension === Dimension.Value);
			this.allTFields = meta.filter(md => md.dimension === Dimension.Time);
			this.allPFields = meta.filter(md => md.dimension === Dimension.StaticProperty);
		}

		this.meta = meta;
		this.data = data;
	}

	onRun(): void {
		const tree: any = this.runEngine();
		this.run.emit({
			entity: this.selectedEntity,
			treeOptions: tree,
			chartOptions: []
		});
	}

	onRunNew(): void {
		const tree: any = this.runEngine();
		this.runNew.emit({
			entity: this.selectedEntity,
			treeOptions: tree,
			chartOptions: this.options()
		});
	}

	onCloseAll(): void {
		this.closeAll.emit();
	}

	private runEngine(): any {
		switch (this.selectedEntity) {
			case SupportedEntities.Humans: break;
			case SupportedEntities.Portfolios: break;
			default:
		}
		return null;
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