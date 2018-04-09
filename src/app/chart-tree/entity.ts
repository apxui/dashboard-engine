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
	id: number;
	name: string;
	children: Array<any>;
	chartType: ChartType;
	chartDatas: Array<ChartData>;
	groupedDatas: Array<any>;
	layer: number;
}
