import { Product_attribute_setAvgOrderByAggregateInput } from "../inputs/Product_attribute_setAvgOrderByAggregateInput";
import { Product_attribute_setCountOrderByAggregateInput } from "../inputs/Product_attribute_setCountOrderByAggregateInput";
import { Product_attribute_setMaxOrderByAggregateInput } from "../inputs/Product_attribute_setMaxOrderByAggregateInput";
import { Product_attribute_setMinOrderByAggregateInput } from "../inputs/Product_attribute_setMinOrderByAggregateInput";
import { Product_attribute_setSumOrderByAggregateInput } from "../inputs/Product_attribute_setSumOrderByAggregateInput";
export declare class Product_attribute_setOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    based_on?: "asc" | "desc" | undefined;
    attribute_id?: "asc" | "desc" | undefined;
    _count?: Product_attribute_setCountOrderByAggregateInput | undefined;
    _avg?: Product_attribute_setAvgOrderByAggregateInput | undefined;
    _max?: Product_attribute_setMaxOrderByAggregateInput | undefined;
    _min?: Product_attribute_setMinOrderByAggregateInput | undefined;
    _sum?: Product_attribute_setSumOrderByAggregateInput | undefined;
}
