import { Catalog_price_ruleAvgAggregate } from "../outputs/Catalog_price_ruleAvgAggregate";
import { Catalog_price_ruleCountAggregate } from "../outputs/Catalog_price_ruleCountAggregate";
import { Catalog_price_ruleMaxAggregate } from "../outputs/Catalog_price_ruleMaxAggregate";
import { Catalog_price_ruleMinAggregate } from "../outputs/Catalog_price_ruleMinAggregate";
import { Catalog_price_ruleSumAggregate } from "../outputs/Catalog_price_ruleSumAggregate";
export declare class AggregateCatalog_price_rule {
    _count: Catalog_price_ruleCountAggregate | null;
    _avg: Catalog_price_ruleAvgAggregate | null;
    _sum: Catalog_price_ruleSumAggregate | null;
    _min: Catalog_price_ruleMinAggregate | null;
    _max: Catalog_price_ruleMaxAggregate | null;
}
