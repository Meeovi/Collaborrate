import { AgreementsAvgOrderByAggregateInput } from "../inputs/AgreementsAvgOrderByAggregateInput";
import { AgreementsCountOrderByAggregateInput } from "../inputs/AgreementsCountOrderByAggregateInput";
import { AgreementsMaxOrderByAggregateInput } from "../inputs/AgreementsMaxOrderByAggregateInput";
import { AgreementsMinOrderByAggregateInput } from "../inputs/AgreementsMinOrderByAggregateInput";
import { AgreementsSumOrderByAggregateInput } from "../inputs/AgreementsSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class AgreementsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: SortOrderInput | undefined;
    type?: SortOrderInput | undefined;
    content?: SortOrderInput | undefined;
    created?: SortOrderInput | undefined;
    excerpt?: SortOrderInput | undefined;
    image?: SortOrderInput | undefined;
    mediamanager?: SortOrderInput | undefined;
    reference_id?: SortOrderInput | undefined;
    shop_id?: SortOrderInput | undefined;
    updated?: SortOrderInput | undefined;
    user_id?: SortOrderInput | undefined;
    _count?: AgreementsCountOrderByAggregateInput | undefined;
    _avg?: AgreementsAvgOrderByAggregateInput | undefined;
    _max?: AgreementsMaxOrderByAggregateInput | undefined;
    _min?: AgreementsMinOrderByAggregateInput | undefined;
    _sum?: AgreementsSumOrderByAggregateInput | undefined;
}
