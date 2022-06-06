import { GraphQLResolveInfo } from "graphql";
import { DeleteWebhooksArgs } from "./args/DeleteWebhooksArgs";
import { Webhooks } from "../../../models/Webhooks";
export declare class DeleteWebhooksResolver {
    deleteWebhooks(ctx: any, info: GraphQLResolveInfo, args: DeleteWebhooksArgs): Promise<Webhooks | null>;
}
