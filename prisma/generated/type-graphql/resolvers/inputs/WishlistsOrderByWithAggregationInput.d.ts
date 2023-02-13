import { WishlistsAvgOrderByAggregateInput } from "../inputs/WishlistsAvgOrderByAggregateInput";
import { WishlistsCountOrderByAggregateInput } from "../inputs/WishlistsCountOrderByAggregateInput";
import { WishlistsMaxOrderByAggregateInput } from "../inputs/WishlistsMaxOrderByAggregateInput";
import { WishlistsMinOrderByAggregateInput } from "../inputs/WishlistsMinOrderByAggregateInput";
import { WishlistsSumOrderByAggregateInput } from "../inputs/WishlistsSumOrderByAggregateInput";
export declare class WishlistsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    customers?: "asc" | "desc" | undefined;
    visibility?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    quantity?: "asc" | "desc" | undefined;
    occassions?: "asc" | "desc" | undefined;
    _count?: WishlistsCountOrderByAggregateInput | undefined;
    _avg?: WishlistsAvgOrderByAggregateInput | undefined;
    _max?: WishlistsMaxOrderByAggregateInput | undefined;
    _min?: WishlistsMinOrderByAggregateInput | undefined;
    _sum?: WishlistsSumOrderByAggregateInput | undefined;
}
