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

export class ChartNode {
	constructor(name: string, layer: number, data: Array<any>,parent: ChartNode) {
		this.name = name;
		this.layer = layer;
		this.data = data;
		this.parent = parent;
	}
	name: string;
	layer: number;
	data: Array<any>;
	value: number;
	children: Array<ChartNode>;
	parent: ChartNode;
}
