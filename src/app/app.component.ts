import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
        <nav class="navbar navbar-expand sticky-top navbar-dark bg-secondary d-flex justify-content-between">
            <a class="navbar-brand" [routerLink]="''"><i class="fas fa-tachometer-alt mr-2"></i>Dashboard Engine</a>

            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" [routerLink]="'test_lucas'">Test Lucas</a>
                </li>
	            <li class="nav-item">
                    <a class="nav-link" [routerLink]="'test_grace'">Test Grace</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" [routerLink]="'test_david'">Test David</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="https://github.com/apxui/dashboard-engine" target="_blank"><i class="fab fa-github fa-lg fa-fw fa-spin mr-1"></i>Follow us on GitHub</a>
                </li>
            </ul>
        </nav>

        <router-outlet></router-outlet>
	`
})
export class AppComponent {

}

