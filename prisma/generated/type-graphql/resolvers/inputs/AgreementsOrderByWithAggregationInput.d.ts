import { AgreementsAvgOrderByAggregateInput } from "../inputs/AgreementsAvgOrderByAggregateInput";
import { AgreementsCountOrderByAggregateInput } from "../inputs/AgreementsCountOrderByAggregateInput";
import { AgreementsMaxOrderByAggregateInput } from "../inputs/AgreementsMaxOrderByAggregateInput";
import { AgreementsMinOrderByAggregateInput } from "../inputs/AgreementsMinOrderByAggregateInput";
import { AgreementsSumOrderByAggregateInput } from "../inputs/AgreementsSumOrderByAggregateInput";
export declare class AgreementsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    reference_id?: "asc" | "desc" | undefined;
    created?: "asc" | "desc" | undefined;
    updated?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    excerpt?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    user_id?: "asc" | "desc" | undefined;
    shop_id?: "asc" | "desc" | undefined;
    mediamanager?: "asc" | "desc" | undefined;
    _count?: AgreementsCountOrderByAggregateInput | undefined;
    _avg?: AgreementsAvgOrderByAggregateInput | undefined;
    _max?: AgreementsMaxOrderByAggregateInput | undefined;
    _min?: AgreementsMinOrderByAggregateInput | undefined;
    _sum?: AgreementsSumOrderByAggregateInput | undefined;
}
