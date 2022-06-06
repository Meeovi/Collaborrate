import { Cart_price_rulesAvgAggregate } from "../outputs/Cart_price_rulesAvgAggregate";
import { Cart_price_rulesCountAggregate } from "../outputs/Cart_price_rulesCountAggregate";
import { Cart_price_rulesMaxAggregate } from "../outputs/Cart_price_rulesMaxAggregate";
import { Cart_price_rulesMinAggregate } from "../outputs/Cart_price_rulesMinAggregate";
import { Cart_price_rulesSumAggregate } from "../outputs/Cart_price_rulesSumAggregate";
export declare class AggregateCart_price_rules {
    _count: Cart_price_rulesCountAggregate | null;
    _avg: Cart_price_rulesAvgAggregate | null;
    _sum: Cart_price_rulesSumAggregate | null;
    _min: Cart_price_rulesMinAggregate | null;
    _max: Cart_price_rulesMaxAggregate | null;
}
