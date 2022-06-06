import { Tax_ruleAvgAggregate } from "../outputs/Tax_ruleAvgAggregate";
import { Tax_ruleCountAggregate } from "../outputs/Tax_ruleCountAggregate";
import { Tax_ruleMaxAggregate } from "../outputs/Tax_ruleMaxAggregate";
import { Tax_ruleMinAggregate } from "../outputs/Tax_ruleMinAggregate";
import { Tax_ruleSumAggregate } from "../outputs/Tax_ruleSumAggregate";
export declare class Tax_ruleGroupBy {
    id: number;
    name: string;
    tax_rate: string | null;
    prod_id: bigint;
    _count: Tax_ruleCountAggregate | null;
    _avg: Tax_ruleAvgAggregate | null;
    _sum: Tax_ruleSumAggregate | null;
    _min: Tax_ruleMinAggregate | null;
    _max: Tax_ruleMaxAggregate | null;
}
