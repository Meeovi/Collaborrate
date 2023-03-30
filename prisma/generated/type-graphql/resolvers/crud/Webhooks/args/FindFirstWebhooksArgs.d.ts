import { WebhooksOrderByWithRelationInput } from "../../../inputs/WebhooksOrderByWithRelationInput";
import { WebhooksWhereInput } from "../../../inputs/WebhooksWhereInput";
import { WebhooksWhereUniqueInput } from "../../../inputs/WebhooksWhereUniqueInput";
export declare class FindFirstWebhooksArgs {
    where?: WebhooksWhereInput | undefined;
    orderBy?: WebhooksOrderByWithRelationInput[] | undefined;
    cursor?: WebhooksWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "url" | "headers" | "create" | "retrieve" | "update" | "delete" | "publish" | "unpublish"> | undefined;
}
