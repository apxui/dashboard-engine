import { ChartType, Property, TypeResult } from './entity';

export class ChartTypeDecider {
    private _reduceSeq: Array<Property>;

    private _dimensionChartTable: any = {
        '2': [ChartType.Line],
        '3': [ChartType.Pie, ChartType.Bar],
        '33': [ChartType.MultiBar, ChartType.NestedPie],
        '32': [ChartType.MultiLine]
    }

    public decideType(reduceSeq: Array<Property>): TypeResult {
        this._reduceSeq = reduceSeq;
        let reduceSeqStr: string = this.convertReduceSeqToStr();
        if (this._dimensionChartTable[reduceSeqStr]) {
            return {
                "reduceSeq": reduceSeq,
                "type": this._dimensionChartTable[reduceSeqStr]
            };
        } else {
            return null;
        }
        
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