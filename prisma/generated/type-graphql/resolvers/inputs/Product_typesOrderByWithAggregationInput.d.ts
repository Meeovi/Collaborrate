import { Product_typesAvgOrderByAggregateInput } from "../inputs/Product_typesAvgOrderByAggregateInput";
import { Product_typesCountOrderByAggregateInput } from "../inputs/Product_typesCountOrderByAggregateInput";
import { Product_typesMaxOrderByAggregateInput } from "../inputs/Product_typesMaxOrderByAggregateInput";
import { Product_typesMinOrderByAggregateInput } from "../inputs/Product_typesMinOrderByAggregateInput";
import { Product_typesSumOrderByAggregateInput } from "../inputs/Product_typesSumOrderByAggregateInput";
export declare class Product_typesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    type_name?: "asc" | "desc" | undefined;
    taxes?: "asc" | "desc" | undefined;
    isShippable?: "asc" | "desc" | undefined;
    meta_url?: "asc" | "desc" | undefined;
    meta_description?: "asc" | "desc" | undefined;
    filter_options?: "asc" | "desc" | undefined;
    product_type?: "asc" | "desc" | undefined;
    prod_id?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    _count?: Product_typesCountOrderByAggregateInput | undefined;
    _avg?: Product_typesAvgOrderByAggregateInput | undefined;
    _max?: Product_typesMaxOrderByAggregateInput | undefined;
    _min?: Product_typesMinOrderByAggregateInput | undefined;
    _sum?: Product_typesSumOrderByAggregateInput | undefined;
}
