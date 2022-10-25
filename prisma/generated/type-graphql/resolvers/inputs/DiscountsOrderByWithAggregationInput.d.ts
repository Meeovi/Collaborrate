import { DiscountsAvgOrderByAggregateInput } from "../inputs/DiscountsAvgOrderByAggregateInput";
import { DiscountsCountOrderByAggregateInput } from "../inputs/DiscountsCountOrderByAggregateInput";
import { DiscountsMaxOrderByAggregateInput } from "../inputs/DiscountsMaxOrderByAggregateInput";
import { DiscountsMinOrderByAggregateInput } from "../inputs/DiscountsMinOrderByAggregateInput";
import { DiscountsSumOrderByAggregateInput } from "../inputs/DiscountsSumOrderByAggregateInput";
export declare class DiscountsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    excerpt?: "asc" | "desc" | undefined;
    discount?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    published?: "asc" | "desc" | undefined;
    special_offers?: "asc" | "desc" | undefined;
    rewards?: "asc" | "desc" | undefined;
    coupons?: "asc" | "desc" | undefined;
    expiration?: "asc" | "desc" | undefined;
    categories?: "asc" | "desc" | undefined;
    articles?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    customers?: "asc" | "desc" | undefined;
    users?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    _count?: DiscountsCountOrderByAggregateInput | undefined;
    _avg?: DiscountsAvgOrderByAggregateInput | undefined;
    _max?: DiscountsMaxOrderByAggregateInput | undefined;
    _min?: DiscountsMinOrderByAggregateInput | undefined;
    _sum?: DiscountsSumOrderByAggregateInput | undefined;
}
