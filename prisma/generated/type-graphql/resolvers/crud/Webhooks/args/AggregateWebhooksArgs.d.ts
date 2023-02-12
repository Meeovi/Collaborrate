import { WebhooksOrderByWithRelationInput } from "../../../inputs/WebhooksOrderByWithRelationInput";
import { WebhooksWhereInput } from "../../../inputs/WebhooksWhereInput";
import { WebhooksWhereUniqueInput } from "../../../inputs/WebhooksWhereUniqueInput";
export declare class AggregateWebhooksArgs {
    where?: WebhooksWhereInput | undefined;
    orderBy?: WebhooksOrderByWithRelationInput[] | undefined;
    cursor?: WebhooksWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
