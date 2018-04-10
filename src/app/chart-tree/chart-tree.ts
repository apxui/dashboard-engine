import {rawData, metaData, reduceSeq} from './data';
import { ChartNode, Property, Dimension, ChartData} from './entity';


export class ChartTree {
	private _rootNode: ChartNode;
	private _reduceSeq: Array<Property>;
	private _rawData: Array<any>;
	private _metaData: Array<any>;

	private _valuePropertyName: string;

	public buildAndGetRootnode(rawdata: Array<any>, metadata: Array<any>, reduceseq: Array<Property>): ChartNode {
		this._rawData = rawdata;
		this._metaData = metadata;
		this._reduceSeq = reduceseq;
		this.buildTree();
		return this._rootNode;
	}

	// the process to build a tree
	private buildTree(): void {
		//find value dimension, used in building chartdatas
		this.findValueDimension();

		//use a queue to build the tree
		this.buildTreeByQueue();
	}


	//use a queue to build the tree
	private buildTreeByQueue(): void {
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
	}

	//find the value dimension because it need to aggregate the value for each group after grouped.
	private findValueDimension(): void {
		metaData.forEach((prop: Property) => {
			if (prop.dimension === Dimension.Value) {
				this._valuePropertyName = prop.name;
			}
		});
	}

	//p

	//divide objs into groups according to property.
	private group(objs: Array<any>, prop: string): any {
		let groupRst: any =  objs.reduce((groups: any, item: any) => {
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

		//assign name
		chartNode.name = groupKey;

		//assign chartDatas
		chartNode.chartDatas = this.buildChartDatas(groupRst);

		//assign groupedDatas which is needed when building tree;
		chartNode.groupedDatas = groupRst;
		
		return chartNode;
	}

	//build chartdatas
	private buildChartDatas(groupDatas: any): Array<ChartData> {
		let chartDatas: Array<ChartData> = [];
		for (let p in groupDatas) {
			if (p) {
				let chartData: ChartData = new ChartData();
				chartData.key = p;
				chartData.value = groupDatas[p].reduce((sumVal: number, item: any) => {
					sumVal += item[this._valuePropertyName];
					return sumVal;
				}, 0);
				chartDatas.push(chartData);
			}	
		}
		return chartDatas;
	}
}
