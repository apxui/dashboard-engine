import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'multi-line',
    template: `
        <div echarts [options]="_options"></div>
	`
})
export class MultiLineChartComponent implements OnInit {
    _options: any;
    @Input() set options(option: MultiLineChartOption) {
        this._options = option;
    }

    ngOnInit(): void {
        //console.log(this.options);
    }

    // onChartClick(e: any): void{
    //     if (this._options) {
    //         console.log(JSON.stringify(e));
    //     }
    // }
}
export class MultiLineChartOption {
    color: Array<string>;
    tooltip: MultiLineTooltip;
    legend: MultiLineLegend;
    grid: MultiLineGrid;
    xAxis: MultiLineData;
    yAxis: MultiLineData;
    series: MultiLineSeries;
}
export class MultiLineTooltip {
    trigger: string;
    axisPointer: any;
}
export class MultiLineLegend {
    data: Array<string>;
}
export class MultiLineGrid {
    top: number;
    bottom: number;
}
export class MultiLineData {
    type: string;
    axisTick?: any;
    axisLine?: any;
    axisPointer?: any;
    data?: Array<any>;
}
export class MultiLineSeries {
    name: string;
    type: string;
    xAxisIndex: number;
    smooth: boolean;
    data: Array<number>;
}
