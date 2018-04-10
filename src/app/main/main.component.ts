import { Component } from '@angular/core';

@Component({
	selector: 'app-main',
	styleUrls: ['./main.component.scss'],
	template: `
		<div class="sticky-top mb-2">
            <div class="container-fluid">
                <div class="row col-12">
	                <h6>Begin with a data type:</h6>
                </div>
                <div class="row col-12">
	                <div class="col-md-2 col-sm-3"
	                     *ngFor="let e of supportedEntities"
	                >
                        <button class="entity-button btn btn-outline-secondary">{{e}}</button>
	                </div>
                </div>
            </div>
		</div>
		
		<div>
            <gridStack
                    [w]="12"
                    [animate]="true"
            ></gridStack>
		</div>
	`
})
export class MainComponent {
	supportedEntities: string[] = ['Portfolios', 'Activities', 'Contacts', 'Holdings', 'Transactions', 'Securities'];
}