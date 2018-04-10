import { ChartType, Property } from './entity';

export class ChartTypeDecider {
    private _reduceSeq: Array<Property>

    private _dimensionChartTable: any = {
        '2': [ChartType.Line],
        '3': [ChartType.Pie, ChartType.Bar],
        '33': [ChartType.multiBar],
        '32': [ChartType.multiLine]
    }

    public decideType(reduceSeq: Array<Property>): ChartType {
        this._reduceSeq = reduceSeq;
        let reduceSeqStr: string = this.convertReduceSeqToStr();
        let type: ChartType;
        

        return ChartType.Bar;
    }

    private convertReduceSeqToStr(): string {
        if (!this._reduceSeq || this._reduceSeq.length === 0) {
            return "";
        }
        let result: string = "";
        this._reduceSeq.forEach((prop: Property) => {
            result += prop.dimension;
        });
        return result;
    }
}