import { Prisma } from "@prisma/client";
import { Catalog_price_ruleAvgAggregate } from "../outputs/Catalog_price_ruleAvgAggregate";
import { Catalog_price_ruleCountAggregate } from "../outputs/Catalog_price_ruleCountAggregate";
import { Catalog_price_ruleMaxAggregate } from "../outputs/Catalog_price_ruleMaxAggregate";
import { Catalog_price_ruleMinAggregate } from "../outputs/Catalog_price_ruleMinAggregate";
import { Catalog_price_ruleSumAggregate } from "../outputs/Catalog_price_ruleSumAggregate";
export declare class Catalog_price_ruleGroupBy {
    id: number;
    rule: string | null;
    description: string | null;
    active: boolean | null;
    customer_groups: string | null;
    priority: string | null;
    start_date: Date | null;
    end_date: Date | null;
    status: string | null;
    website: string | null;
    actions_apply: string | null;
    actions_discount_amount: Prisma.Decimal | null;
    actions_discard_subsequent_rules: boolean | null;
    _count: Catalog_price_ruleCountAggregate | null;
    _avg: Catalog_price_ruleAvgAggregate | null;
    _sum: Catalog_price_ruleSumAggregate | null;
    _min: Catalog_price_ruleMinAggregate | null;
    _max: Catalog_price_ruleMaxAggregate | null;
}
