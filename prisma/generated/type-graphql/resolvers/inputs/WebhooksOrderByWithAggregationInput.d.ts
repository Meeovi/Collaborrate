import { SortOrderInput } from "../inputs/SortOrderInput";
import { WebhooksAvgOrderByAggregateInput } from "../inputs/WebhooksAvgOrderByAggregateInput";
import { WebhooksCountOrderByAggregateInput } from "../inputs/WebhooksCountOrderByAggregateInput";
import { WebhooksMaxOrderByAggregateInput } from "../inputs/WebhooksMaxOrderByAggregateInput";
import { WebhooksMinOrderByAggregateInput } from "../inputs/WebhooksMinOrderByAggregateInput";
import { WebhooksSumOrderByAggregateInput } from "../inputs/WebhooksSumOrderByAggregateInput";
export declare class WebhooksOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    name?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    headers?: SortOrderInput | undefined;
    create?: SortOrderInput | undefined;
    retrieve?: SortOrderInput | undefined;
    update?: SortOrderInput | undefined;
    delete?: SortOrderInput | undefined;
    publish?: SortOrderInput | undefined;
    unpublish?: SortOrderInput | undefined;
    _count?: WebhooksCountOrderByAggregateInput | undefined;
    _avg?: WebhooksAvgOrderByAggregateInput | undefined;
    _max?: WebhooksMaxOrderByAggregateInput | undefined;
    _min?: WebhooksMinOrderByAggregateInput | undefined;
    _sum?: WebhooksSumOrderByAggregateInput | undefined;
}
