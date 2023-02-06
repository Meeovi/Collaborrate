import { GraphQLResolveInfo } from "graphql";
import { UpsertOneWebhooksArgs } from "./args/UpsertOneWebhooksArgs";
import { Webhooks } from "../../../models/Webhooks";
export declare class UpsertOneWebhooksResolver {
    upsertOneWebhooks(ctx: any, info: GraphQLResolveInfo, args: UpsertOneWebhooksArgs): Promise<Webhooks>;
}
