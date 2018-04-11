import { Component } from '@angular/core';

@Component({
	selector: 'app-main',
	styleUrls: ['./main.component.scss'],
	template: `
		<div class="d-flex flex-row" style="height: 100%;">
            <div style="overflow-y: auto; width: 200px;">
                <div class="sticky-top px-3 pt-3 pb-1" style="background-color: white;">
                    <h6>Begin with a data type:</h6>
                </div>
	            <div class="px-3 pt-1 pb-3">
                    <div class="mb-2" *ngFor="let e of supportedEntities">
                        <button class="entity-button btn btn-outline-secondary">{{e}}</button>
                    </div>
	            </div>
            </div>
			<div class="flex-grow-1 d-flex flex-column pr-3 py-3" style="overflow-y: auto;">
                <ul class="nav nav-tabs sticky-top">
                    <li class="nav-item" *ngFor="let cg of chartGroups">
                        <div class="nav-link" [class.active]="cg === activeChartGroup" (click)="activeChartGroup = cg">
	                        {{cg}}
                            <button type="button" class="close ml-3" aria-label="Close" (click)="onCloseChartGroup(cg)">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </li>
                </ul>

                <ng-container *ngFor="let cg of chartGroups">
                    <div class="flex-grow-1 container-fluid pt-3"
                         style="overflow-y: auto;" 
                         *ngIf="cg === activeChartGroup"
                    >
                        <div class="row">
	                        <div class="col-4"></div>
                        </div>
                    </div>
                </ng-container>
			</div>
		</div>
	`
})
export class MainComponent {
	supportedEntities: string[] = ['Portfolios', 'Activities', 'Contacts', 'Holdings', 'Transactions', 'Securities'];
	chartGroups: any[] = ['(empty)'];

	activeChartGroup: string = '(empty)';

	onCloseChartGroup(group: string): void {
		if (this.chartGroups.length === 1) {
			this.chartGroups = ['(empty)'];
			this.activeChartGroup = '(empty)';
		}
	}
}