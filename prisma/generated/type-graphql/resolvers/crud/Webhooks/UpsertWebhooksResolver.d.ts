import { GraphQLResolveInfo } from "graphql";
import { UpsertWebhooksArgs } from "./args/UpsertWebhooksArgs";
import { Webhooks } from "../../../models/Webhooks";
export declare class UpsertWebhooksResolver {
    upsertWebhooks(ctx: any, info: GraphQLResolveInfo, args: UpsertWebhooksArgs): Promise<Webhooks>;
}
