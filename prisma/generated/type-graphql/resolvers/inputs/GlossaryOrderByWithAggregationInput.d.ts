import { GlossaryAvgOrderByAggregateInput } from "../inputs/GlossaryAvgOrderByAggregateInput";
import { GlossaryCountOrderByAggregateInput } from "../inputs/GlossaryCountOrderByAggregateInput";
import { GlossaryMaxOrderByAggregateInput } from "../inputs/GlossaryMaxOrderByAggregateInput";
import { GlossaryMinOrderByAggregateInput } from "../inputs/GlossaryMinOrderByAggregateInput";
import { GlossarySumOrderByAggregateInput } from "../inputs/GlossarySumOrderByAggregateInput";
export declare class GlossaryOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    published?: "asc" | "desc" | undefined;
    _count?: GlossaryCountOrderByAggregateInput | undefined;
    _avg?: GlossaryAvgOrderByAggregateInput | undefined;
    _max?: GlossaryMaxOrderByAggregateInput | undefined;
    _min?: GlossaryMinOrderByAggregateInput | undefined;
    _sum?: GlossarySumOrderByAggregateInput | undefined;
}
