import { Component } from '@angular/core';
import { ChartNode, Property, TypeResult } from '../chart-tree/entity';
import { DashboardEngine } from '../engine/engine';
import { StorageService } from '../storage/storage.service';
import { WizardService } from '../wizard/wizard.service';
import { IChartGroup } from './main.types';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';

@Component({
	selector: 'app-main',
	styleUrls: ['./main.component.scss'],
	template: `
		<div class="d-flex flex-row" style="height: 100%;">
            <div style="min-width: 300px; width: 300px; flex: 0 1 auto; border-right: 1px solid #dee2e6;">
                <app-wizard (run)="onRun($event)" (runNew)="onRunNew($event)" (closeAll)="onCloseAll()"></app-wizard>
            </div>
			<div class="flex-grow-1 d-flex flex-column pl-3 pr-3 py-3">
                <ul class="nav nav-tabs sticky-top" style="min-height: 42px; flex: 0 1 auto;">
                    <li class="nav-item" *ngFor="let cg of chartGroups; let i = index">
                        <div class="nav-link" [class.active]="cg.id === activeChartGroup?.id" style="cursor: pointer;" (click)="onSelectChartGroup(cg)">
	                        {{cg.name || cg.id}}
                            <button type="button" class="close ml-3" aria-label="Close" (click)="onCloseChartGroup(cg, i)">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </li>
                </ul>

                <div class="flex-grow-1 container-fluid pt-3"
                     style="overflow-y: auto; overflow-x: hidden;"
                >
	                <div class="row pb-3" style="height: 300px; border-bottom: #dee2e6 1px solid; overflow-y: auto;">
                        <div class="col-12">
                            <div echarts [options]="activeChartGroup.treeOptions.treeOptions" (chartClick)="onTreeClick($event.data)"></div>
                        </div>
	                </div>
                    <div class="row pt-3">
                        <div [ngClass]="activeColClass()" *ngFor="let opt of activeChartGroup?.chartOptions">
                            <div echarts [options]="opt"></div>
                        </div>
                    </div>
                </div>
			</div>
		</div>
	`
})
export class MainComponent {
	readonly EmptyChartGroup: IChartGroup = {
		id: 'empty',
		name: '(empty)',
		entity: undefined,
		treeOptions: null,
		chartOptions: []
	};

	chartGroups: IChartGroup[] = [this.EmptyChartGroup];
	activeChartGroup: IChartGroup = this.EmptyChartGroup;
	uid: number = 0;

	constructor(private wizard: WizardService, private storage: StorageService) {
		this.restoreFromStorage();
	}

	onRun({entity, treeOptions, chartOptions}): void {
		this.createChartGroup(entity, treeOptions, chartOptions, false);
	}

	onRunNew({entity, treeOptions, chartOptions}): void {
		this.createChartGroup(entity, treeOptions, chartOptions);
	}

	onCloseAll(): void {
		this.resetChartGroups();
	}

	onTreeClick(data: any): void {
		let node: ChartNode = this.activeChartGroup.treeOptions.tree.getNode(data.uid);
		let chartTypes: TypeResult[] = this.activeChartGroup.treeOptions.tree.getChartTypeForNode(node);
		let dimLabels: any = [];
		chartTypes.forEach((ct: TypeResult) => {
			dimLabels.push(ct.reduceSeq.map((dim: Property) => this.activeChartGroup.treeOptions.tree.getAllPropertiesByDim(dim.name)));
		});
		DashboardEngine.createChartOption(chartTypes, node, dimLabels);
	}

	activeColClass(): any {
		const chartCount: number = this.activeChartGroup.chartOptions.length;
		return {
			'col-md-12': true,
			'col-lg-12': chartCount === 1,
			'col-lg-6': chartCount === 2,
			'col-lg-4': chartCount > 2
		};
	}

	onSelectChartGroup(group: IChartGroup): void {
		this.activeChartGroup = group;
		this.updateStorage(true);
	}

	onCloseChartGroup(group: IChartGroup, index: number): void {
		if (this.chartGroups.length <= 1) {
			this.resetChartGroups();
		} else {
			if (group.id === this.activeChartGroup.id) {
				const newActive: IChartGroup = index - 1 >= 0 ? this.chartGroups[index - 1] : this.chartGroups[index + 1];
				this.activeChartGroup = newActive;
			}
			this.chartGroups = this.chartGroups.filter(cg => cg.id != group.id);
			this.updateStorage();
		}
	}

	private resetChartGroups(): void {
		this.chartGroups = [this.EmptyChartGroup];
		this.activeChartGroup = this.EmptyChartGroup;
		this.storage.clearAll();
	}

	private createChartGroup(entity: string, treeOptions: any, chartOptions: any[], inNewTab: boolean = true): void {
		console.log(treeOptions);
		const groups: IChartGroup[] = [...this.chartGroups];
		const newId: string = `${this.uid ++}_${entity}`;
		const newGroup: IChartGroup = {
			entity: entity,
			id: newId,
			name: newId,
			treeOptions: treeOptions,
			chartOptions: [...chartOptions]
		};
		if (inNewTab) {
			if (this.activeChartGroup.id === this.EmptyChartGroup.id) {
				groups.length = 0;
			}
			groups.push(newGroup);
		} else {
			const activeIndex: number = groups.findIndex(g => g.id === this.activeChartGroup.id);
			groups[activeIndex] = newGroup;
		}

		this.chartGroups = groups;
		this.activeChartGroup = newGroup;

		this.updateStorage();
	}

	private restoreFromStorage(): void {
		const groups: IChartGroup[] = this.storage.read('dashboard_chart_groups', 'object');
		if (!groups) {
			this.resetChartGroups();
		} else {
			this.chartGroups = groups;
		}

		const active: IChartGroup = this.storage.read('dashboard_active_chart_group', 'object');
		if (!active) {
			this.activeChartGroup = this.chartGroups[0];
		} else {
			this.activeChartGroup = active;
		}
	}

	private updateStorage(activeOnly: boolean = false): void {
		if (!activeOnly) {
			this.storage.write('dashboard_chart_groups', this.chartGroups, 'object');
		}
		this.storage.write('dashboard_active_chart_group', this.activeChartGroup, 'object');
	}
}