import { Product_attributeAvgAggregate } from "../outputs/Product_attributeAvgAggregate";
import { Product_attributeCountAggregate } from "../outputs/Product_attributeCountAggregate";
import { Product_attributeMaxAggregate } from "../outputs/Product_attributeMaxAggregate";
import { Product_attributeMinAggregate } from "../outputs/Product_attributeMinAggregate";
import { Product_attributeSumAggregate } from "../outputs/Product_attributeSumAggregate";
export declare class AggregateProduct_attribute {
    _count: Product_attributeCountAggregate | null;
    _avg: Product_attributeAvgAggregate | null;
    _sum: Product_attributeSumAggregate | null;
    _min: Product_attributeMinAggregate | null;
    _max: Product_attributeMaxAggregate | null;
}
