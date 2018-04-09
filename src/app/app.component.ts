import { Component } from '@angular/core';
import { main } from './chart-tree/chart-tree';

@Component({
	selector: 'app-root',
	template: `
        <h1>Dashboard Engine</h1>
		<app-test></app-test>
	`
})
export class AppComponent {
	constructor() {

	}
}
