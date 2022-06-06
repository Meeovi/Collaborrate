import { CouponsAvgOrderByAggregateInput } from "../inputs/CouponsAvgOrderByAggregateInput";
import { CouponsCountOrderByAggregateInput } from "../inputs/CouponsCountOrderByAggregateInput";
import { CouponsMaxOrderByAggregateInput } from "../inputs/CouponsMaxOrderByAggregateInput";
import { CouponsMinOrderByAggregateInput } from "../inputs/CouponsMinOrderByAggregateInput";
import { CouponsSumOrderByAggregateInput } from "../inputs/CouponsSumOrderByAggregateInput";
export declare class CouponsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    excerpt?: "asc" | "desc" | undefined;
    discount?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    published?: "asc" | "desc" | undefined;
    expiration?: "asc" | "desc" | undefined;
    categories?: "asc" | "desc" | undefined;
    articles?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    customers?: "asc" | "desc" | undefined;
    users?: "asc" | "desc" | undefined;
    prod_id?: "asc" | "desc" | undefined;
    _count?: CouponsCountOrderByAggregateInput | undefined;
    _avg?: CouponsAvgOrderByAggregateInput | undefined;
    _max?: CouponsMaxOrderByAggregateInput | undefined;
    _min?: CouponsMinOrderByAggregateInput | undefined;
    _sum?: CouponsSumOrderByAggregateInput | undefined;
}
