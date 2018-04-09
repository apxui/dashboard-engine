import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
        <nav class="navbar navbar-expand sticky-top navbar-dark bg-primary d-flex justify-content-between">
            <a class="navbar-brand" href="#"><i class="fas fa-tachometer-alt mr-2"></i>Dashboard Engine</a>

            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="https://github.com/apxui/dashboard-engine" target="_blank"><i class="fab fa-github fa-lg fa-fw fa-spin mr-1"></i>Follow us on GitHub</a>
                </li>
            </ul>
        </nav>
        
        <div class="container-fluid">
	        <app-test></app-test>
        </div>
	`
})
export class AppComponent {
	constructor() {

	}
}
