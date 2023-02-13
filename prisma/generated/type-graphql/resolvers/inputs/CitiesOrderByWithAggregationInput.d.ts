import { CitiesAvgOrderByAggregateInput } from "../inputs/CitiesAvgOrderByAggregateInput";
import { CitiesCountOrderByAggregateInput } from "../inputs/CitiesCountOrderByAggregateInput";
import { CitiesMaxOrderByAggregateInput } from "../inputs/CitiesMaxOrderByAggregateInput";
import { CitiesMinOrderByAggregateInput } from "../inputs/CitiesMinOrderByAggregateInput";
import { CitiesSumOrderByAggregateInput } from "../inputs/CitiesSumOrderByAggregateInput";
export declare class CitiesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    state?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    postalCode?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    _count?: CitiesCountOrderByAggregateInput | undefined;
    _avg?: CitiesAvgOrderByAggregateInput | undefined;
    _max?: CitiesMaxOrderByAggregateInput | undefined;
    _min?: CitiesMinOrderByAggregateInput | undefined;
    _sum?: CitiesSumOrderByAggregateInput | undefined;
}
