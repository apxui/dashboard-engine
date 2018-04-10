export enum Dimension {
	Value = 1,
	Time,
	StaticProperty
}

export enum ChartType {
	LineChart = 1,
	PieChart
}

export class Property {
	name: string;
	dimension: Dimension;
}

export class ChartData {
	key: any;
	value: number;
}

export class ChartNode {
	name: string;
	children: Array<any>;
	chartType: ChartType;
	chartDatas: Array<ChartData>;
	groupedDatas: any;
	layer: number;
}
