import { Product_typesOrderByWithAggregationInput } from "../../../inputs/Product_typesOrderByWithAggregationInput";
import { Product_typesScalarWhereWithAggregatesInput } from "../../../inputs/Product_typesScalarWhereWithAggregatesInput";
import { Product_typesWhereInput } from "../../../inputs/Product_typesWhereInput";
export declare class GroupByProduct_typesArgs {
    where?: Product_typesWhereInput | undefined;
    orderBy?: Product_typesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "type_name" | "taxes" | "isShippable" | "meta_url" | "meta_description" | "filter_options" | "product_type" | "prod_id" | "products">;
    having?: Product_typesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
