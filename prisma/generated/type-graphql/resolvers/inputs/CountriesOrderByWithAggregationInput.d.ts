import { CountriesAvgOrderByAggregateInput } from "../inputs/CountriesAvgOrderByAggregateInput";
import { CountriesCountOrderByAggregateInput } from "../inputs/CountriesCountOrderByAggregateInput";
import { CountriesMaxOrderByAggregateInput } from "../inputs/CountriesMaxOrderByAggregateInput";
import { CountriesMinOrderByAggregateInput } from "../inputs/CountriesMinOrderByAggregateInput";
import { CountriesSumOrderByAggregateInput } from "../inputs/CountriesSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class CountriesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: SortOrderInput | undefined;
    image?: SortOrderInput | undefined;
    region?: SortOrderInput | undefined;
    trainings?: SortOrderInput | undefined;
    _count?: CountriesCountOrderByAggregateInput | undefined;
    _avg?: CountriesAvgOrderByAggregateInput | undefined;
    _max?: CountriesMaxOrderByAggregateInput | undefined;
    _min?: CountriesMinOrderByAggregateInput | undefined;
    _sum?: CountriesSumOrderByAggregateInput | undefined;
}
