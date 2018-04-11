import { ChartTree } from "../chart-tree/chart-tree";
import { ChartsUtil } from "../charts/charts.util";
import { ChartNode, TypeResult, Property, ChartType } from "../chart-tree/entity";

export class DashboardEngine {
    public static buildMainTree(rawdata: Array<any>, metadata: Array<any>, reduceseq: Array<Property>, pivotValues: Array<string>): any {
		let mainTree: ChartTree = new ChartTree();
		let mainTreeData: any = mainTree.buildAndGetRootnode(rawdata, metadata, reduceseq, pivotValues);
		let mainTreeOption: any = ChartsUtil.convertToTreeOption(mainTreeData);

		return {
			option: mainTreeOption,
			onTreeClickHandler: (treeNodeData: any) => {
				let node: ChartNode = mainTree.getNode(treeNodeData.uid);
				let chartTypes: TypeResult[] = mainTree.getChartTypeForNode(node);
				console.log(node);
				console.log(chartTypes);
				// let dimLabels: any = [];
				// chartTypes.forEach((ct: TypeResult) => {
				// 	dimLabels.push(ct.reduceSeq.map((dim: Property) => mainTree.getAllPropertiesByDim(dim.name)));
				// });
				// this._createCharts(chartTypes, node, dimLabels);
			}
		};
    }
    // public static _createCharts(chartTypes: TypeResult[], chartNode: ChartNode, dimLabels: any) {
	// 	// this.chartList = [];
	// 	if (chartTypes && chartTypes.length > 0) {
	// 		chartTypes.forEach((ct: TypeResult) => {
	// 			// to-do
	// 			if (ct.type.indexOf(ChartType.Pie) >= 0) {
	// 				let pieOption: any = ChartsUtil.convertChartNodeToPieNode(chartNode, ct.reduceSeq);
	// 				this._drawChart(pieOption, ChartType.Pie);
	// 			}
	// 			if (ct.type.indexOf(ChartType.NestedPie) >= 0) {
	// 				let nestedPieOption: any = ChartsUtil.convertChartNodeToNestedPieNode(chartNode, ct.reduceSeq);
	// 				this._drawChart(nestedPieOption, ChartType.NestedPie);
	// 			}
	// 			if (ct.type.indexOf(ChartType.Bar) >= 0) {
	// 				this._drawChart(ChartsUtil.convertToSimpleBarChartOption(ct.reduceSeq, chartNode, 'bar'), ChartType.Bar);
	// 			}
	// 			if (ct.type.indexOf(ChartType.MultiBar) >= 0) {
	// 				this._drawChart(ChartsUtil.convertToMultiBarChartOption(ct.reduceSeq, chartNode, dimLabels[chartTypes.indexOf(ct)], 'bar'), ChartType.MultiBar);
	// 			}
	// 			if (ct.type.indexOf(ChartType.Line) >= 0) {
	// 				this._drawChart(ChartsUtil.convertToSimpleBarChartOption(ct.reduceSeq, chartNode, 'line'), ChartType.Line);
	// 			}
	// 			if (ct.type.indexOf(ChartType.MultiLine) >= 0) {
	// 				this._drawChart(ChartsUtil.convertToMultiBarChartOption(ct.reduceSeq, chartNode, dimLabels[chartTypes.indexOf(ct)], 'line'), ChartType.MultiLine);
	// 			}
	// 		})
	// 	} else {
	// 		this._drawChart(ChartsUtil.convertToSimpleBarChartOption([], chartNode, 'bar'), ChartType.Bar);
	// 	}
	// }

	// _drawChart(option: any, type: ChartType): void {
	// 	this.chartList.push(
	// 		{
	// 			chartOption: {
	// 				option: option
	// 			},
	// 			chartType: type
	// 		});
	// }
}