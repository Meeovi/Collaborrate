import { TaxesAvgAggregate } from "../outputs/TaxesAvgAggregate";
import { TaxesCountAggregate } from "../outputs/TaxesCountAggregate";
import { TaxesMaxAggregate } from "../outputs/TaxesMaxAggregate";
import { TaxesMinAggregate } from "../outputs/TaxesMinAggregate";
import { TaxesSumAggregate } from "../outputs/TaxesSumAggregate";
export declare class AggregateTaxes {
    _count: TaxesCountAggregate | null;
    _avg: TaxesAvgAggregate | null;
    _sum: TaxesSumAggregate | null;
    _min: TaxesMinAggregate | null;
    _max: TaxesMaxAggregate | null;
}
