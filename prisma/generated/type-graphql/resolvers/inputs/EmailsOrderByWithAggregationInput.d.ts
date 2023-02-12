import { EmailsAvgOrderByAggregateInput } from "../inputs/EmailsAvgOrderByAggregateInput";
import { EmailsCountOrderByAggregateInput } from "../inputs/EmailsCountOrderByAggregateInput";
import { EmailsMaxOrderByAggregateInput } from "../inputs/EmailsMaxOrderByAggregateInput";
import { EmailsMinOrderByAggregateInput } from "../inputs/EmailsMinOrderByAggregateInput";
import { EmailsSumOrderByAggregateInput } from "../inputs/EmailsSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class EmailsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    subject?: SortOrderInput | undefined;
    content?: SortOrderInput | undefined;
    cust_id?: "asc" | "desc" | undefined;
    bcc?: SortOrderInput | undefined;
    cc?: SortOrderInput | undefined;
    from?: SortOrderInput | undefined;
    media?: SortOrderInput | undefined;
    staff_id?: SortOrderInput | undefined;
    customers?: SortOrderInput | undefined;
    users?: SortOrderInput | undefined;
    _count?: EmailsCountOrderByAggregateInput | undefined;
    _avg?: EmailsAvgOrderByAggregateInput | undefined;
    _max?: EmailsMaxOrderByAggregateInput | undefined;
    _min?: EmailsMinOrderByAggregateInput | undefined;
    _sum?: EmailsSumOrderByAggregateInput | undefined;
}
