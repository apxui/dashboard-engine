import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MainModule } from './main/main.module';
import { StorageModule } from './storage/storage.module';
import { TestGraceComponent } from './test/test-grace.component';
import { TestLucasComponent } from './test/test-lucas.component';
import { TestModule } from './test/test.module';
import { TestDavidComponent } from './test/test-david.component';

const routing = [
	{ path: '', component: MainComponent},
	{ path: 'test_lucas', component: TestLucasComponent},
	{ path: 'test_grace', component: TestGraceComponent},
	{ path: 'test_david', component: TestDavidComponent}
];

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routing),
		StorageModule,
		TestModule,
		MainModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
