export enum Dimension {
	Value = 1,
	Time,
	StaticProperty
}

export enum ChartType {
	Line = 1,
	Pie,
	Bar,
	multiLine,
	multiBar,
	NestedPie
}

export class Property {
	name: string;
	dimension: Dimension;
}

export class ChartNode {
	constructor(id: number, name: string, layer: number, data: Array<any>,parent: ChartNode) {
		this.id = id;
		this.name = name;
		this.layer = layer;
		this.data = data;
		this.parent = parent;
	}
	id: number;
	name: string;
	layer: number;
	data: Array<any>;
	value: number;
	children: Array<ChartNode>;
	parent: ChartNode;
}
