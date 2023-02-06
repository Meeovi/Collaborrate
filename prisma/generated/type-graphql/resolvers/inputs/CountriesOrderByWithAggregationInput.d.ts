import { CountriesAvgOrderByAggregateInput } from "../inputs/CountriesAvgOrderByAggregateInput";
import { CountriesCountOrderByAggregateInput } from "../inputs/CountriesCountOrderByAggregateInput";
import { CountriesMaxOrderByAggregateInput } from "../inputs/CountriesMaxOrderByAggregateInput";
import { CountriesMinOrderByAggregateInput } from "../inputs/CountriesMinOrderByAggregateInput";
import { CountriesSumOrderByAggregateInput } from "../inputs/CountriesSumOrderByAggregateInput";
export declare class CountriesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    region?: "asc" | "desc" | undefined;
    trainings?: "asc" | "desc" | undefined;
    _count?: CountriesCountOrderByAggregateInput | undefined;
    _avg?: CountriesAvgOrderByAggregateInput | undefined;
    _max?: CountriesMaxOrderByAggregateInput | undefined;
    _min?: CountriesMinOrderByAggregateInput | undefined;
    _sum?: CountriesSumOrderByAggregateInput | undefined;
}
