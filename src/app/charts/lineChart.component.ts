import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'basic-line',
    template: `
        <div echarts [options]="_options" (chartClick)="onChartClick($event)"></div>
	`
})
export class LineChartComponent implements OnInit {
    _options: any;
    @Input() set options(option: LineChartOption) {
        this._options = option;
    }

    ngOnInit(): void {
        //console.log(this.options);
    }

    onChartClick(e: any): void{
        if (this._options) {
            console.log(JSON.stringify(e));
        }
    }
}
export class LineChartOption {
    xAxis: LineData;
    yAxis: LineData;
    series: LineData;
}
export class LineData {
    data: Array<any>;
    type: string;
}