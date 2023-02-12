import { Product_typesAvgOrderByAggregateInput } from "../inputs/Product_typesAvgOrderByAggregateInput";
import { Product_typesCountOrderByAggregateInput } from "../inputs/Product_typesCountOrderByAggregateInput";
import { Product_typesMaxOrderByAggregateInput } from "../inputs/Product_typesMaxOrderByAggregateInput";
import { Product_typesMinOrderByAggregateInput } from "../inputs/Product_typesMinOrderByAggregateInput";
import { Product_typesSumOrderByAggregateInput } from "../inputs/Product_typesSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class Product_typesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    type_name?: SortOrderInput | undefined;
    taxes?: SortOrderInput | undefined;
    isShippable?: SortOrderInput | undefined;
    meta_url?: SortOrderInput | undefined;
    meta_description?: SortOrderInput | undefined;
    filter_options?: SortOrderInput | undefined;
    product_type?: SortOrderInput | undefined;
    prod_id?: "asc" | "desc" | undefined;
    products?: SortOrderInput | undefined;
    _count?: Product_typesCountOrderByAggregateInput | undefined;
    _avg?: Product_typesAvgOrderByAggregateInput | undefined;
    _max?: Product_typesMaxOrderByAggregateInput | undefined;
    _min?: Product_typesMinOrderByAggregateInput | undefined;
    _sum?: Product_typesSumOrderByAggregateInput | undefined;
}
