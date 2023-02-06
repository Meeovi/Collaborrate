import { GraphQLResolveInfo } from "graphql";
import { UpdateOneWebhooksArgs } from "./args/UpdateOneWebhooksArgs";
import { Webhooks } from "../../../models/Webhooks";
export declare class UpdateOneWebhooksResolver {
    updateOneWebhooks(ctx: any, info: GraphQLResolveInfo, args: UpdateOneWebhooksArgs): Promise<Webhooks | null>;
}
