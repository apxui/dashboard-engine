import { ChartNode, Property, Dimension, ChartType } from './entity';
import { ChartTypeDecider } from './chart-type';


export class ChartTree {
	private _rootNode: ChartNode;
	private _reduceSeq: Array<Property>;
	private _rawData: Array<any>;
	private _metaData: Array<any>;

	private _valuePropertyName: string;
	private _typeDecider: ChartTypeDecider = new ChartTypeDecider();

	public buildAndGetRootnode(rawdata: Array<any>, metadata: Array<any>, reduceseq: Array<Property>): ChartNode {
		this._rawData = rawdata;
		this._metaData = metadata;
		this._reduceSeq = reduceseq;
		this._typeDecider.decideType(reduceseq);
		this.buildTree();
		console.log(this._rootNode);
		return this._rootNode;
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
		this._rootNode = new ChartNode("root", 0, this._rawData, null);

		queue.push(this._rootNode);
		while (queue.length !== 0) {
			let chartNode: ChartNode = queue.shift();
			let groupdata = this.group(chartNode.data, chartNode.layer);
			let children = []
			for (let p in groupdata) {
				let newNode: ChartNode = new ChartNode(p, chartNode.layer + 1, groupdata[p], chartNode);
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
