import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { StorageService } from '../storage/storage.service';
import { WizardService } from '../wizard/wizard.service';
import { SupportedEntities } from './main.constants';
import { IChartGroup } from './main.types';
import 'rxjs/add/operator/filter';

@Component({
	selector: 'app-main',
	styleUrls: ['./main.component.scss'],
	template: `
		<div class="d-flex flex-row" style="height: 100%;">
            <div style="overflow-y: auto; min-width: 200px; flex: 0 1 auto;">
                <div class="sticky-top px-3 pt-3 pb-1" style="background-color: white;">
                    <h6>Begin with a data type:</h6>
                </div>
	            <div class="px-3 pt-1 pb-3">
                    <div class="mb-2" *ngFor="let e of supportedEntities">
                        <button class="entity-button btn btn-outline-secondary" (click)="onChooseEntity(e)">{{e}}</button>
                    </div>
	            </div>
            </div>
			<div class="flex-grow-1 d-flex flex-column pr-3 py-3">
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
                    <div class="row">
                        <div [ngClass]="activeColClass()" *ngFor="let opt of activeChartGroup?.chartOptions">
                            <div echarts [options]="opt"></div>
                        </div>
                    </div>
                </div>
			</div>
		</div>
	`
})
export class MainComponent implements OnDestroy {
	readonly EmptyChartGroup: IChartGroup = {
		id: 'empty',
		name: '(empty)',
		entity: undefined,
		chartOptions: []
	};

	supportedEntities: string[] = SupportedEntities.ALL;
	chartGroups: IChartGroup[] = [this.EmptyChartGroup];
	activeChartGroup: IChartGroup = this.EmptyChartGroup;

	private createChartsSubscription: Subscription;

	constructor(private wizard: WizardService, private storage: StorageService) {
		this.restoreFromStorage();
	}

	ngOnDestroy(): void {
		if (this.createChartsSubscription) {
			this.createChartsSubscription.unsubscribe();
			this.createChartsSubscription = null;
		}
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

	onChooseEntity(entity: string): void {
		if (this.createChartsSubscription) {
			this.createChartsSubscription.unsubscribe();
			this.createChartsSubscription = null;
		}
		this.createChartsSubscription = this.wizard.createCharts(entity).filter(chartOptions => chartOptions && chartOptions.length > 0).subscribe(chartOptions => {
			this.createNewChartGroup(entity, chartOptions);
		});
	}

	onSelectChartGroup(group: IChartGroup): void {
		this.activeChartGroup = group;
		this.updateStorage(true);
	}

	onCloseChartGroup(group: IChartGroup, index: number): void {
		if (this.chartGroups.length <= 1) {
			this.resetChartGroups();
		} else {
			const newActive: IChartGroup = index - 1 >= 0 ? this.chartGroups[index - 1] : this.chartGroups[index + 1];
			this.chartGroups = this.chartGroups.filter(cg => cg.id != group.id);
			this.activeChartGroup = newActive;
			this.updateStorage();
		}
	}

	private resetChartGroups(): void {
		this.chartGroups = [this.EmptyChartGroup];
		this.activeChartGroup = this.EmptyChartGroup;
		this.storage.clearAll();
	}

	private createNewChartGroup(entity: string, chartOptions: any[]): void {
		const groups: IChartGroup[] = [...this.chartGroups];
		if (this.activeChartGroup.id === this.EmptyChartGroup.id) {
			groups.length = 0;
		}
		const newGroup: IChartGroup = {
			entity: entity,
			id: `${groups.length}_${entity}`,
			name: `${groups.length}_${entity}`,
			chartOptions: [...chartOptions]
		};
		groups.push(newGroup);
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