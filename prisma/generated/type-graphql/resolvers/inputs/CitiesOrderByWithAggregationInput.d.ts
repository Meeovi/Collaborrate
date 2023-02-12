import { CitiesAvgOrderByAggregateInput } from "../inputs/CitiesAvgOrderByAggregateInput";
import { CitiesCountOrderByAggregateInput } from "../inputs/CitiesCountOrderByAggregateInput";
import { CitiesMaxOrderByAggregateInput } from "../inputs/CitiesMaxOrderByAggregateInput";
import { CitiesMinOrderByAggregateInput } from "../inputs/CitiesMinOrderByAggregateInput";
import { CitiesSumOrderByAggregateInput } from "../inputs/CitiesSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class CitiesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: SortOrderInput | undefined;
    state?: SortOrderInput | undefined;
    country?: SortOrderInput | undefined;
    postalCode?: SortOrderInput | undefined;
    image?: SortOrderInput | undefined;
    _count?: CitiesCountOrderByAggregateInput | undefined;
    _avg?: CitiesAvgOrderByAggregateInput | undefined;
    _max?: CitiesMaxOrderByAggregateInput | undefined;
    _min?: CitiesMinOrderByAggregateInput | undefined;
    _sum?: CitiesSumOrderByAggregateInput | undefined;
}
