import { ShopsAvgAggregate } from "../outputs/ShopsAvgAggregate";
import { ShopsCountAggregate } from "../outputs/ShopsCountAggregate";
import { ShopsMaxAggregate } from "../outputs/ShopsMaxAggregate";
import { ShopsMinAggregate } from "../outputs/ShopsMinAggregate";
import { ShopsSumAggregate } from "../outputs/ShopsSumAggregate";
export declare class AggregateShops {
    _count: ShopsCountAggregate | null;
    _avg: ShopsAvgAggregate | null;
    _sum: ShopsSumAggregate | null;
    _min: ShopsMinAggregate | null;
    _max: ShopsMaxAggregate | null;
}
