import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'chart-tree',
    template: `
        <div echarts [options]="_options.option" (chartClick)="onChartClick($event)"></div>
	`
})
export class TreeComponent implements OnInit {
    _options: any;
    @Input() set options(optionValue: TreeOption) {
        this._options = optionValue;
    }

    ngOnInit(): void {
        console.log(this.options);
    }

    onChartClick(e: any): void{
        if (this._options && this._options.onTreeClickHandler) {
            this._options.onTreeClickHandler(e.data);
        }
    }
}
export class TreeOption {
    option: any;
    onTreeClickHandler: (treeNodeData: any) => {};
}
export class TreeData {
    name: string;
    children: TreeData[];
    collapsed: boolean;
    value: any;
}