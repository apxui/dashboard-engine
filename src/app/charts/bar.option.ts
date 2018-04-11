export class BarOption {
	title: {text: string};
	tooltip: any;
	xAxis: {type: string, data: string[]}[]; //type: value/category
	yAxys: {type: string, data: string[]}[];
	series: BarChartSeriesData[];
	legend?: string[]; // for multi bar
	toolbox?: any;
	grid?: any;
}
export class BarChartSeriesData {
	name: string;
	type: string;
	data: number[];
	markPoint?: any;
	markLine?: any;
}
export const barTooltip: any = {
	trigger: 'axis',
	axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	}
};
export const barMarkPoint: any = {
	data : [
		{type : 'max', name: '最大值'},
		{type : 'min', name: '最小值'}
	]
};
export const barMarkLine: any = {
	data : [
		{type : 'average', name: '平均值'}
	]
}
export const barToolBox: any = {
	show : true,
	feature : {
		dataView : {show: false, readOnly: false},
		magicType : {show: false, type: ['line', 'bar']},
		restore : {show: false},
		saveAsImage : {show: true}
	}
};
export const fakeBarData: {name: string, data: number[]}[] = [
    {name: 'a',
    data: [1, 2, 3, 4]},
    {name: 'b',
    data: [4, 3, 2, 1]}
]