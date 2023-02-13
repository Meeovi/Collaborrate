import { WebhooksAvgOrderByAggregateInput } from "../inputs/WebhooksAvgOrderByAggregateInput";
import { WebhooksCountOrderByAggregateInput } from "../inputs/WebhooksCountOrderByAggregateInput";
import { WebhooksMaxOrderByAggregateInput } from "../inputs/WebhooksMaxOrderByAggregateInput";
import { WebhooksMinOrderByAggregateInput } from "../inputs/WebhooksMinOrderByAggregateInput";
import { WebhooksSumOrderByAggregateInput } from "../inputs/WebhooksSumOrderByAggregateInput";
export declare class WebhooksOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    headers?: "asc" | "desc" | undefined;
    create?: "asc" | "desc" | undefined;
    retrieve?: "asc" | "desc" | undefined;
    update?: "asc" | "desc" | undefined;
    delete?: "asc" | "desc" | undefined;
    publish?: "asc" | "desc" | undefined;
    unpublish?: "asc" | "desc" | undefined;
    _count?: WebhooksCountOrderByAggregateInput | undefined;
    _avg?: WebhooksAvgOrderByAggregateInput | undefined;
    _max?: WebhooksMaxOrderByAggregateInput | undefined;
    _min?: WebhooksMinOrderByAggregateInput | undefined;
    _sum?: WebhooksSumOrderByAggregateInput | undefined;
}
