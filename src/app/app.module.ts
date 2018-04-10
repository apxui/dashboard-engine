import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TestModule } from './test/test.module';
import { ChartsModule } from './charts/charts.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		TestModule,
		ChartsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
