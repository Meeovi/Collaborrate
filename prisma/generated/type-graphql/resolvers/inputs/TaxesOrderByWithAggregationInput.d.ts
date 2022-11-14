import { TaxesAvgOrderByAggregateInput } from "../inputs/TaxesAvgOrderByAggregateInput";
import { TaxesCountOrderByAggregateInput } from "../inputs/TaxesCountOrderByAggregateInput";
import { TaxesMaxOrderByAggregateInput } from "../inputs/TaxesMaxOrderByAggregateInput";
import { TaxesMinOrderByAggregateInput } from "../inputs/TaxesMinOrderByAggregateInput";
import { TaxesSumOrderByAggregateInput } from "../inputs/TaxesSumOrderByAggregateInput";
export declare class TaxesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    tax_identifier?: "asc" | "desc" | undefined;
    postcode?: "asc" | "desc" | undefined;
    state?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    rate_percent?: "asc" | "desc" | undefined;
    taxDefault?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    taxRuleName?: "asc" | "desc" | undefined;
    taxCategory?: "asc" | "desc" | undefined;
    _count?: TaxesCountOrderByAggregateInput | undefined;
    _avg?: TaxesAvgOrderByAggregateInput | undefined;
    _max?: TaxesMaxOrderByAggregateInput | undefined;
    _min?: TaxesMinOrderByAggregateInput | undefined;
    _sum?: TaxesSumOrderByAggregateInput | undefined;
}
