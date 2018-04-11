import { ChartTree } from "../chart-tree/chart-tree";
import { ChartsUtil } from "../charts/charts.util";
import { ChartNode, TypeResult, Property, ChartType } from "../chart-tree/entity";

export class DashboardEngine {
    public static buildMainTree(rawdata: Array<any>, metadata: Array<any>, reduceseq: Array<Property>, pivotValues: Array<string>): any {
        let mainTree: ChartTree = new ChartTree();
        let mainTreeData: any = mainTree.buildAndGetRootnode(rawdata, metadata, reduceseq, pivotValues);
        let mainTreeOption: any = ChartsUtil.convertToTreeOption(mainTreeData);
        return {
            tree: mainTree,
            treeOptions: mainTreeOption
        };
    }

    public static createChartOption(chartTypes: TypeResult[], chartNode: ChartNode, dimLabels: any, pivotValues?: string[]): any[] {
        let result: any[] = [];
        if (chartTypes && chartTypes.length > 0) {
            chartTypes.forEach((ct: TypeResult) => {
                // to-do
                if (ct.type.indexOf(ChartType.Pie) >= 0) {
                    let pieOption: any = ChartsUtil.convertChartNodeToPieNode(chartNode, ct.reduceSeq);
                    result.push(pieOption);
                }
                if (ct.type.indexOf(ChartType.NestedPie) >= 0) {
                    let nestedPieOption: any = ChartsUtil.convertChartNodeToNestedPieNode(chartNode, ct.reduceSeq);
                    result.push(nestedPieOption);
                }
                if (ct.type.indexOf(ChartType.Bar) >= 0) {
                    result.push(ChartsUtil.convertToSimpleBarChartOption(ct.reduceSeq, chartNode, 'bar'));
                }
                if (ct.type.indexOf(ChartType.MultiBar) >= 0) {
                    if (ct.reduceSeq.length === 2) {
                        result.push(ChartsUtil.convertToMultiBarChartOption(ct.reduceSeq, chartNode, dimLabels[chartTypes.indexOf(ct)], 'bar'));
                    } else if (ct.reduceSeq.length === 1) {
                        // self value
                        result.push(ChartsUtil.convertToMultiValueBarChartOption(ct.reduceSeq, chartNode, pivotValues));
                    }
                }
                if (ct.type.indexOf(ChartType.Line) >= 0) {
                    result.push(ChartsUtil.convertToSimpleBarChartOption(ct.reduceSeq, chartNode, 'line'));
                }
                if (ct.type.indexOf(ChartType.MultiLine) >= 0) {
                    result.push(ChartsUtil.convertToMultiBarChartOption(ct.reduceSeq, chartNode, dimLabels[chartTypes.indexOf(ct)], 'line'));
                }
                if (ct.type.indexOf(ChartType.Radio) >= 0) {
                    result.push(ChartsUtil.convertChartNodeToRadarChartNode(chartNode, pivotValues));
                }
            });
            return result;
        } else {
            return [ChartsUtil.convertToSimpleBarChartOption([], chartNode, 'bar')];
        }
    }
}