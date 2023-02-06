import { Product_typesAvgAggregate } from "../outputs/Product_typesAvgAggregate";
import { Product_typesCountAggregate } from "../outputs/Product_typesCountAggregate";
import { Product_typesMaxAggregate } from "../outputs/Product_typesMaxAggregate";
import { Product_typesMinAggregate } from "../outputs/Product_typesMinAggregate";
import { Product_typesSumAggregate } from "../outputs/Product_typesSumAggregate";
export declare class Product_typesGroupBy {
    id: number;
    type_name: string | null;
    taxes: string | null;
    isShippable: string | null;
    meta_url: string | null;
    meta_description: string | null;
    filter_options: string | null;
    product_type: string | null;
    prod_id: bigint;
    products: string | null;
    _count: Product_typesCountAggregate | null;
    _avg: Product_typesAvgAggregate | null;
    _sum: Product_typesSumAggregate | null;
    _min: Product_typesMinAggregate | null;
    _max: Product_typesMaxAggregate | null;
}
