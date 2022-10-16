import { Special_discountsAvgOrderByAggregateInput } from "../inputs/Special_discountsAvgOrderByAggregateInput";
import { Special_discountsCountOrderByAggregateInput } from "../inputs/Special_discountsCountOrderByAggregateInput";
import { Special_discountsMaxOrderByAggregateInput } from "../inputs/Special_discountsMaxOrderByAggregateInput";
import { Special_discountsMinOrderByAggregateInput } from "../inputs/Special_discountsMinOrderByAggregateInput";
import { Special_discountsSumOrderByAggregateInput } from "../inputs/Special_discountsSumOrderByAggregateInput";
export declare class Special_discountsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    excerpt?: "asc" | "desc" | undefined;
    discount?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    published?: "asc" | "desc" | undefined;
    rewards?: "asc" | "desc" | undefined;
    coupons?: "asc" | "desc" | undefined;
    expiration?: "asc" | "desc" | undefined;
    categories?: "asc" | "desc" | undefined;
    articles?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    customers?: "asc" | "desc" | undefined;
    users?: "asc" | "desc" | undefined;
    _count?: Special_discountsCountOrderByAggregateInput | undefined;
    _avg?: Special_discountsAvgOrderByAggregateInput | undefined;
    _max?: Special_discountsMaxOrderByAggregateInput | undefined;
    _min?: Special_discountsMinOrderByAggregateInput | undefined;
    _sum?: Special_discountsSumOrderByAggregateInput | undefined;
}
