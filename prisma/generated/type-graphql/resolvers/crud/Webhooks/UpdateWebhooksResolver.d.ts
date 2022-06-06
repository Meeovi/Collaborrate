import { GraphQLResolveInfo } from "graphql";
import { UpdateWebhooksArgs } from "./args/UpdateWebhooksArgs";
import { Webhooks } from "../../../models/Webhooks";
export declare class UpdateWebhooksResolver {
    updateWebhooks(ctx: any, info: GraphQLResolveInfo, args: UpdateWebhooksArgs): Promise<Webhooks | null>;
}
