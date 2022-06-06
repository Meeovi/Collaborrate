import { WebhooksCreateInput } from "../../../inputs/WebhooksCreateInput";
import { WebhooksUpdateInput } from "../../../inputs/WebhooksUpdateInput";
import { WebhooksWhereUniqueInput } from "../../../inputs/WebhooksWhereUniqueInput";
export declare class UpsertWebhooksArgs {
    where: WebhooksWhereUniqueInput;
    create: WebhooksCreateInput;
    update: WebhooksUpdateInput;
}
