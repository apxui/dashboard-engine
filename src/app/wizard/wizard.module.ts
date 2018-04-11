import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { WizardComponent } from './wizard.component';
import { WizardService } from './wizard.service';

@NgModule({
	imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [
		WizardService
	],
	declarations: [
		WizardComponent
	],
	exports: [
		WizardComponent
	]
})
export class WizardModule {

}