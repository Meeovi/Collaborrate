import { DigiboardAvgOrderByAggregateInput } from "../inputs/DigiboardAvgOrderByAggregateInput";
import { DigiboardCountOrderByAggregateInput } from "../inputs/DigiboardCountOrderByAggregateInput";
import { DigiboardMaxOrderByAggregateInput } from "../inputs/DigiboardMaxOrderByAggregateInput";
import { DigiboardMinOrderByAggregateInput } from "../inputs/DigiboardMinOrderByAggregateInput";
import { DigiboardSumOrderByAggregateInput } from "../inputs/DigiboardSumOrderByAggregateInput";
export declare class DigiboardOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    board?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    student?: "asc" | "desc" | undefined;
    course?: "asc" | "desc" | undefined;
    _count?: DigiboardCountOrderByAggregateInput | undefined;
    _avg?: DigiboardAvgOrderByAggregateInput | undefined;
    _max?: DigiboardMaxOrderByAggregateInput | undefined;
    _min?: DigiboardMinOrderByAggregateInput | undefined;
    _sum?: DigiboardSumOrderByAggregateInput | undefined;
}
