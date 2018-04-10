import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'base-chart',
    template: `
        <div echarts [options]="_options.option" (chartClick)="onChartClick($event)"></div>
	`
})
export class BaseChartComponent {
    _options: any;
    @Input() set options(optionValue: BaseChartOption) {
        this._options = optionValue;
        console.log('basechart', this._options);
        
    }
    onChartClick(e: any): void{
        if (this._options && this._options.onTreeClickHandler) {
            this._options.onTreeClickHandler(e.data);
        }
    }
}
export class BaseChartOption {
    option: any;
    onTreeClickHandler?: (nodeData: any) => {};
}