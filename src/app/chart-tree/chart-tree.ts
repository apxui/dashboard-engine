import { ChartNode, Property, Dimension, ChartType, TypeResult } from './entity';
import { ChartTypeDecider } from './chart-type';


export class ChartTree {
	private _rootNode: ChartNode;
	private _reduceSeq: Array<Property>;
	private _rawData: Array<any>;
	private _metaData: Array<any>;

	private _valuePropertyName: string;
	private _typeDecider: ChartTypeDecider = new ChartTypeDecider();
	private _id: number = 0;
	private _allNodes: Array<ChartNode> = [];

	public getChartTypeForNode(node: ChartNode): Array<TypeResult> {
		let redSeq: Array<Property> = [];
		let result: Array<any> = [];
		//from the layer of the node, judget the type for each further layer
		for (let i = node.layer; i < this._reduceSeq.length; i++) {
			redSeq.push(this._reduceSeq[i]);
			let resultForLayer: any = this._typeDecider.decideType(redSeq.slice());//use slice to shallow copy Array: redSeq
			if (resultForLayer) {
				result.push(resultForLayer);
			} else {
				break;
			}
		}
		return result;
	}

	public buildAndGetRootnode(rawdata: Array<any>, metadata: Array<any>, reduceseq: Array<Property>): ChartNode {
		this._rawData = rawdata;
		this._metaData = metadata;
		this._reduceSeq = reduceseq;
		this.filterRawData();
		this.buildTree();
		return this._rootNode;
	}

	public getNode(id: number): ChartNode {
		return this._allNodes[id];
	}

	private filterRawData(): void {
		let newRawData: Array<any> = [];
		this._rawData.forEach((item: any) => {
			let o: any = {};
			this._reduceSeq.forEach((p: Property) => {
				o[p.name] = item[p.name];
			});
			o[this._valuePropertyName] = item[this._valuePropertyName];
			newRawData.push(o);
		});
		this._rawData = newRawData;
	}

	// the process to build a tree
	private buildTree(): void {
		//find value dimension, used in building chartdatas
		this.findValueDimension();

		//use a queue to build the tree
		this.buildTreeByQueue();

		//summarize the value of each node
		this.buildlNodeValue();
	}

	private buildlNodeValue(): void {
		let queue: Array<ChartNode> = [];
		queue.push(this._rootNode);
		
		while (queue.length !== 0) {
			let node: ChartNode = queue.shift();
			node.value = node.data.reduce((sumVal, item) => {
				sumVal += item[this._valuePropertyName];
				return sumVal;
			}, 0);
			node.children.forEach(item => queue.push(item));
		}	
	}


	//use a queue to build the tree
	private buildTreeByQueue(): void {
		let queue: Array<ChartNode> = [];
		this._rootNode = new ChartNode(0, "root", 0, this._rawData, null);

		queue.push(this._rootNode);
		while (queue.length !== 0) {
			let chartNode: ChartNode = queue.shift();
			this._allNodes.push(chartNode);
			let groupdata = this.group(chartNode.data, chartNode.layer);
			let children = []
			for (let p in groupdata) {
				let newNode: ChartNode = new ChartNode(++this._id, p, chartNode.layer + 1, groupdata[p], chartNode);
				children.push(newNode);
				queue.push(newNode);
			}
			chartNode.children = children;
		}
	}

	//find the value dimension because it need to aggregate the value for each group after grouped.
	private findValueDimension(): void {
		this._metaData.forEach((prop: Property) => {
			if (prop.dimension === Dimension.Value) {
				this._valuePropertyName = prop.name;
			}
		});
	}


	//divide objs into groups according to property.
	private group(objs: Array<any>, layer: number): any {
		if (layer < this._reduceSeq.length) {
			let prop: string = this._reduceSeq[layer].name;
			let groupRst: any =  objs.reduce((groups: any, item: any) => {
				const val: any = item[prop];
				groups[val] = groups[val] || [];
				groups[val].push(item);
				return groups;
			}, {});
			return groupRst;
		}
		return null;
	}
}
