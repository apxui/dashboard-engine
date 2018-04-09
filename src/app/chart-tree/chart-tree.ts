import {rawData, metaData, Dimension, reduceDimensionsInOrder} from './data';

enum ChartType {
	LineChart = 1,
	PieChart
}

class Property {
	name: string;
	dimension: Dimension;
}

class ChartData {
	key: any;
	value: number;
}

class ChartNode {
	id: number;
	name: string;
	children: Array<any>;
	chartType: ChartType;
	chartDatas: Array<ChartData>;
	groupedDatas: Array<any>;
	layer: number;
}

class ChartTree {
	rootNode: ChartNode;
	reduceDimensionsInOrder: Array<Property>;
	rawData: Array<any>;
	metaData: Array<any>;

	private _valuePropertyName: string;
	private _id: number = 0;

	buildTree(): void {
		//validate

		//set value property name
		this.findValueProperty();

		//use a queue to build the tree
		let queue: Array<ChartNode> = [];
		this.rootNode = this.buildChartNode(this.rawData, 0, "Root");
		queue.push(this.rootNode);
		while (queue.length !== 0) {
			let chartNode: ChartNode = queue.shift();
			let groupDatas: Array<any> = chartNode.groupedDatas;
			let children: Array<ChartNode> = [];
			for (let p in chartNode.groupedDatas) {
				if (chartNode.layer + 1 < this.reduceDimensionsInOrder.length) {
					let newNode: ChartNode = this.buildChartNode(groupDatas[p], chartNode.layer + 1, p);
					children.push(newNode);
					queue.push(newNode);
				}
			}
			chartNode.children = children;
		}
		
		console.log(this.rootNode);
		
	}

	findValueProperty(): void {
		metaData.forEach((prop: Property) => {
			if (prop.dimension === Dimension.Value) {
				this._valuePropertyName = prop.name;
			}
		});
	}

	private group(objs: Array<any>, prop: string): Array<any> {
		let groupRst: Array<any> =  objs.reduce((groups: any, item: any) => {
			const val: any = item[prop];
			groups[val] = groups[val] || [];
			groups[val].push(item);
			return groups;
		}, {});
		return groupRst;
	}

	private buildChartNode(objs: Array<any>, layer: number, groupKey: string): ChartNode {
		let prop: string = this.reduceDimensionsInOrder[layer].name;
		if (!prop || prop.trim() === "") {
			return null;
		}

		let groupRst: Array<any> = this.group(objs, prop);

		let chartNode: ChartNode = new ChartNode();

		//assign layer
		chartNode.layer = layer;

		//assign id
		chartNode.id = this._id++;

		//assign name
		chartNode.name = "Property:" + groupKey + " Group by: " + prop;

		//assign originDatas;
		chartNode.groupedDatas = groupRst;

		//assign chartDatas
		let chartDatas: Array<ChartData> = [];
		for (let p in groupRst) {
			if (p) {
				let chartData: ChartData = new ChartData();
				chartData.key = p;
				chartData.value = groupRst[p].reduce((sumVal: number, item: any) => {
					sumVal += item[this._valuePropertyName];
					return sumVal;
				}, 0);
				chartDatas.push(chartData);
			}	
		}
		chartNode.chartDatas = chartDatas;
		
		return chartNode;
	}


}

export function main(): void {
	let tree: ChartTree = new ChartTree();
	tree.rawData = rawData;
	tree.reduceDimensionsInOrder = reduceDimensionsInOrder;
	tree.buildTree();
}