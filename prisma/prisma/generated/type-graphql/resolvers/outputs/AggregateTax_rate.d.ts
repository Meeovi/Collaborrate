import { Tax_rateAvgAggregate } from "../outputs/Tax_rateAvgAggregate";
import { Tax_rateCountAggregate } from "../outputs/Tax_rateCountAggregate";
import { Tax_rateMaxAggregate } from "../outputs/Tax_rateMaxAggregate";
import { Tax_rateMinAggregate } from "../outputs/Tax_rateMinAggregate";
import { Tax_rateSumAggregate } from "../outputs/Tax_rateSumAggregate";
export declare class AggregateTax_rate {
    _count: Tax_rateCountAggregate | null;
    _avg: Tax_rateAvgAggregate | null;
    _sum: Tax_rateSumAggregate | null;
    _min: Tax_rateMinAggregate | null;
    _max: Tax_rateMaxAggregate | null;
}
