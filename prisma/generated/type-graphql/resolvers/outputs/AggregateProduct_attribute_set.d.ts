import { Product_attribute_setAvgAggregate } from "../outputs/Product_attribute_setAvgAggregate";
import { Product_attribute_setCountAggregate } from "../outputs/Product_attribute_setCountAggregate";
import { Product_attribute_setMaxAggregate } from "../outputs/Product_attribute_setMaxAggregate";
import { Product_attribute_setMinAggregate } from "../outputs/Product_attribute_setMinAggregate";
import { Product_attribute_setSumAggregate } from "../outputs/Product_attribute_setSumAggregate";
export declare class AggregateProduct_attribute_set {
    _count: Product_attribute_setCountAggregate | null;
    _avg: Product_attribute_setAvgAggregate | null;
    _sum: Product_attribute_setSumAggregate | null;
    _min: Product_attribute_setMinAggregate | null;
    _max: Product_attribute_setMaxAggregate | null;
}
