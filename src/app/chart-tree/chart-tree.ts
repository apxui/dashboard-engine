import {rawData, metaData, reduceSeq} from './data';
import { ChartNode, Property, Dimension, ChartData} from './entity';


class ChartTree {
	private _rootNode: ChartNode;
	private _reduceSeq: Array<Property>;
	private _rawData: Array<any>;
	private _metaData: Array<any>;

	private _valuePropertyName: string;
	private _id: number = 0;

	//getter and setter
	public get rootNode(): ChartNode {
		return this._rootNode;
	}

	public set reduceSeq(reduceseq: Array<Property>) {
		this._reduceSeq = reduceseq;
	}

	public set rawData(rawdata: Array<any>) {
		this._rawData = rawdata;
	}

	public set metaData(metadata: Array<any>) {
		this._metaData = metadata;
	}

	// the process to build a tree
	public buildTree(): void {
		//1. validate

		//2. find value dimension, used in building chartdatas
		this.findValueDimension();

		//use a queue to build the tree
		let queue: Array<ChartNode> = [];
		this._rootNode = this.buildChartNode(this._rawData, 0, "Root");
		queue.push(this._rootNode);
		while (queue.length !== 0) {
			let chartNode: ChartNode = queue.shift();
			let groupDatas: Array<any> = chartNode.groupedDatas;
			let children: Array<ChartNode> = [];
			for (let p in chartNode.groupedDatas) {
				if (chartNode.layer + 1 < this._reduceSeq.length) {
					let newNode: ChartNode = this.buildChartNode(groupDatas[p], chartNode.layer + 1, p);
					children.push(newNode);
					queue.push(newNode);
				}
			}
			chartNode.children = children;
		}
		
		console.log(this._rootNode);
	}


	//find the value dimension because it need to aggregate the value for each group after grouped.
	private findValueDimension(): void {
		metaData.forEach((prop: Property) => {
			if (prop.dimension === Dimension.Value) {
				this._valuePropertyName = prop.name;
			}
		});
	}

	//divide objs into groups according to property.
	private group(objs: Array<any>, prop: string): Array<any> {
		let groupRst: Array<any> =  objs.reduce((groups: any, item: any) => {
			const val: any = item[prop];
			groups[val] = groups[val] || [];
			groups[val].push(item);
			return groups;
		}, {});
		return groupRst;
	}

	//build chart node's every property respectively, especially the "chartDatas"
	private buildChartNode(objs: Array<any>, layer: number, groupKey: string): ChartNode {
		let prop: string = this._reduceSeq[layer].name;
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

		//assign groupedDatas which is needed when building tree;
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
	tree.reduceSeq = reduceSeq;
	tree.buildTree();
}