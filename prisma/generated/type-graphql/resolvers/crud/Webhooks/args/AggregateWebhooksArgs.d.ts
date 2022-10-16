import { WebhooksOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/WebhooksOrderByWithRelationAndSearchRelevanceInput";
import { WebhooksWhereInput } from "../../../inputs/WebhooksWhereInput";
import { WebhooksWhereUniqueInput } from "../../../inputs/WebhooksWhereUniqueInput";
export declare class AggregateWebhooksArgs {
    where?: WebhooksWhereInput | undefined;
    orderBy?: WebhooksOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: WebhooksWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
