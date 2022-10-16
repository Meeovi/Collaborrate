import { Tax_categoryAvgAggregate } from "../outputs/Tax_categoryAvgAggregate";
import { Tax_categoryCountAggregate } from "../outputs/Tax_categoryCountAggregate";
import { Tax_categoryMaxAggregate } from "../outputs/Tax_categoryMaxAggregate";
import { Tax_categoryMinAggregate } from "../outputs/Tax_categoryMinAggregate";
import { Tax_categorySumAggregate } from "../outputs/Tax_categorySumAggregate";
export declare class Tax_categoryGroupBy {
    id: bigint;
    created_at: Date | null;
    name: string | null;
    default: string | null;
    _count: Tax_categoryCountAggregate | null;
    _avg: Tax_categoryAvgAggregate | null;
    _sum: Tax_categorySumAggregate | null;
    _min: Tax_categoryMinAggregate | null;
    _max: Tax_categoryMaxAggregate | null;
}
