import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'chart-tree',
    template: `
        <div echarts [options]="_options"></div>
	`
})
export class TreeComponent implements OnInit {
    _options: any;
    @Input() set options(optionValue: any) {
        this._options = optionValue;
    }

    ngOnInit(): void {
        console.log(this.options);
    }
}
export class TreeData {
    name: string;
    children: TreeData[];
    collapsed: boolean;
    value: any;
}