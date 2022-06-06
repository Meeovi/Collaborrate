import { EmailsAvgOrderByAggregateInput } from "../inputs/EmailsAvgOrderByAggregateInput";
import { EmailsCountOrderByAggregateInput } from "../inputs/EmailsCountOrderByAggregateInput";
import { EmailsMaxOrderByAggregateInput } from "../inputs/EmailsMaxOrderByAggregateInput";
import { EmailsMinOrderByAggregateInput } from "../inputs/EmailsMinOrderByAggregateInput";
import { EmailsSumOrderByAggregateInput } from "../inputs/EmailsSumOrderByAggregateInput";
export declare class EmailsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    subject?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    recipients?: "asc" | "desc" | undefined;
    cust_id?: "asc" | "desc" | undefined;
    _count?: EmailsCountOrderByAggregateInput | undefined;
    _avg?: EmailsAvgOrderByAggregateInput | undefined;
    _max?: EmailsMaxOrderByAggregateInput | undefined;
    _min?: EmailsMinOrderByAggregateInput | undefined;
    _sum?: EmailsSumOrderByAggregateInput | undefined;
}
