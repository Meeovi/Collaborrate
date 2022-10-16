import { PollsAvgOrderByAggregateInput } from "../inputs/PollsAvgOrderByAggregateInput";
import { PollsCountOrderByAggregateInput } from "../inputs/PollsCountOrderByAggregateInput";
import { PollsMaxOrderByAggregateInput } from "../inputs/PollsMaxOrderByAggregateInput";
import { PollsMinOrderByAggregateInput } from "../inputs/PollsMinOrderByAggregateInput";
import { PollsSumOrderByAggregateInput } from "../inputs/PollsSumOrderByAggregateInput";
export declare class PollsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    excerpt?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    published?: "asc" | "desc" | undefined;
    question?: "asc" | "desc" | undefined;
    response?: "asc" | "desc" | undefined;
    categories?: "asc" | "desc" | undefined;
    articles?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    customers?: "asc" | "desc" | undefined;
    users?: "asc" | "desc" | undefined;
    _count?: PollsCountOrderByAggregateInput | undefined;
    _avg?: PollsAvgOrderByAggregateInput | undefined;
    _max?: PollsMaxOrderByAggregateInput | undefined;
    _min?: PollsMinOrderByAggregateInput | undefined;
    _sum?: PollsSumOrderByAggregateInput | undefined;
}
