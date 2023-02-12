import { SortOrderInput } from "../inputs/SortOrderInput";
import { WishlistsAvgOrderByAggregateInput } from "../inputs/WishlistsAvgOrderByAggregateInput";
import { WishlistsCountOrderByAggregateInput } from "../inputs/WishlistsCountOrderByAggregateInput";
import { WishlistsMaxOrderByAggregateInput } from "../inputs/WishlistsMaxOrderByAggregateInput";
import { WishlistsMinOrderByAggregateInput } from "../inputs/WishlistsMinOrderByAggregateInput";
import { WishlistsSumOrderByAggregateInput } from "../inputs/WishlistsSumOrderByAggregateInput";
export declare class WishlistsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    name?: SortOrderInput | undefined;
    customers?: SortOrderInput | undefined;
    visibility?: SortOrderInput | undefined;
    products?: SortOrderInput | undefined;
    quantity?: SortOrderInput | undefined;
    occassions?: SortOrderInput | undefined;
    _count?: WishlistsCountOrderByAggregateInput | undefined;
    _avg?: WishlistsAvgOrderByAggregateInput | undefined;
    _max?: WishlistsMaxOrderByAggregateInput | undefined;
    _min?: WishlistsMinOrderByAggregateInput | undefined;
    _sum?: WishlistsSumOrderByAggregateInput | undefined;
}
