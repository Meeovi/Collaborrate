import { WebhooksOrderByWithAggregationInput } from "../../../inputs/WebhooksOrderByWithAggregationInput";
import { WebhooksScalarWhereWithAggregatesInput } from "../../../inputs/WebhooksScalarWhereWithAggregatesInput";
import { WebhooksWhereInput } from "../../../inputs/WebhooksWhereInput";
export declare class GroupByWebhooksArgs {
    where?: WebhooksWhereInput | undefined;
    orderBy?: WebhooksOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "url" | "headers" | "create" | "retrieve" | "update" | "delete" | "publish" | "unpublish">;
    having?: WebhooksScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
