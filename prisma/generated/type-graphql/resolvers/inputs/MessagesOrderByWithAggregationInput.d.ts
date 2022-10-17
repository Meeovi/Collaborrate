import { MessagesAvgOrderByAggregateInput } from "../inputs/MessagesAvgOrderByAggregateInput";
import { MessagesCountOrderByAggregateInput } from "../inputs/MessagesCountOrderByAggregateInput";
import { MessagesMaxOrderByAggregateInput } from "../inputs/MessagesMaxOrderByAggregateInput";
import { MessagesMinOrderByAggregateInput } from "../inputs/MessagesMinOrderByAggregateInput";
import { MessagesSumOrderByAggregateInput } from "../inputs/MessagesSumOrderByAggregateInput";
export declare class MessagesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    from?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    subject?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    sender?: "asc" | "desc" | undefined;
    cust_id?: "asc" | "desc" | undefined;
    media?: "asc" | "desc" | undefined;
    staff_id?: "asc" | "desc" | undefined;
    customers?: "asc" | "desc" | undefined;
    users?: "asc" | "desc" | undefined;
    _count?: MessagesCountOrderByAggregateInput | undefined;
    _avg?: MessagesAvgOrderByAggregateInput | undefined;
    _max?: MessagesMaxOrderByAggregateInput | undefined;
    _min?: MessagesMinOrderByAggregateInput | undefined;
    _sum?: MessagesSumOrderByAggregateInput | undefined;
}
