import { ChartType, Property, TypeResult, Dimension } from './entity';

export class ChartTypeDecider {
    private _reduceSeq: Array<Property>;
    private _pivotValues: Array<string>;

    private _dimensionChartTable: any = {
        '112': ChartType.Line,
        '113': ChartType.Pie,
        '1233': ChartType.NestedPie,
        '1232': ChartType.MultiLine,
        '20': ChartType.Scatter,
        '30': ChartType.ThreeDim,
        '40': ChartType.Radio,
        '212': ChartType.MultiLine,
        '213': ChartType.MultiBar,
        '312': ChartType.MultiLine,
        '313': ChartType.MultiBar,
        '412': ChartType.MultiLine,
        '413': ChartType.MultiBar
    }

    public decideType(reduceSeq: Array<Property>, pivotValues: Array<string>): TypeResult {
        this._reduceSeq = reduceSeq;
        this._pivotValues = pivotValues;
        let result: Array<TypeResult> = [];

        let reduceSeqStr: string = this.convertReduceSeqToStr();
        if (this._dimensionChartTable[reduceSeqStr]) {
            return {
                'reduceSeq': this._reduceSeq,
                'type': [this._dimensionChartTable[reduceSeqStr]]
        } else {
            return null;
        }
        
    }

    private convertReduceSeqToStr(): string {
        let pvNum: number = this._pivotValues.length < 4 ? this._pivotValues.length : 4;
        let redSeqNum: number = this._reduceSeq.length < 2 ? this._reduceSeq.length : 2;

        let result: string = "" + pvNum + redSeqNum;
        this._reduceSeq.forEach((prop: Property) => {
            result += prop.dimension;
        });
        return result;
    }
}