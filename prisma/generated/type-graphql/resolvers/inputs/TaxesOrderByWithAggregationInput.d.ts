import { SortOrderInput } from "../inputs/SortOrderInput";
import { TaxesAvgOrderByAggregateInput } from "../inputs/TaxesAvgOrderByAggregateInput";
import { TaxesCountOrderByAggregateInput } from "../inputs/TaxesCountOrderByAggregateInput";
import { TaxesMaxOrderByAggregateInput } from "../inputs/TaxesMaxOrderByAggregateInput";
import { TaxesMinOrderByAggregateInput } from "../inputs/TaxesMinOrderByAggregateInput";
import { TaxesSumOrderByAggregateInput } from "../inputs/TaxesSumOrderByAggregateInput";
export declare class TaxesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    tax_identifier?: "asc" | "desc" | undefined;
    postcode?: SortOrderInput | undefined;
    state?: SortOrderInput | undefined;
    country?: SortOrderInput | undefined;
    rate_percent?: SortOrderInput | undefined;
    taxDefault?: SortOrderInput | undefined;
    products?: SortOrderInput | undefined;
    taxRuleName?: SortOrderInput | undefined;
    taxCategory?: SortOrderInput | undefined;
    _count?: TaxesCountOrderByAggregateInput | undefined;
    _avg?: TaxesAvgOrderByAggregateInput | undefined;
    _max?: TaxesMaxOrderByAggregateInput | undefined;
    _min?: TaxesMinOrderByAggregateInput | undefined;
    _sum?: TaxesSumOrderByAggregateInput | undefined;
}
