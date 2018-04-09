import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { TestComponent } from './test.component';

@NgModule({
	declarations: [
		TestComponent
	],
	exports: [
		TestComponent
	]
})
export class TestModule {
}